FROM bellsoft/liberica-openjdk-alpine:17.0.2

WORKDIR /app

ENV NODE_VERSION=20.13.1
RUN apk add curl
RUN apk add bash
RUN apk add maven
RUN apk add --no-cache libstdc++
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN node --version
RUN npm --version

COPY src /home/app/src
COPY frontend /home/app/frontend
COPY lombok.config /home/app
COPY pom.xml /home/app

RUN mvn -B -Pproduction -Ph2 -DskipTests -f /home/app/pom.xml clean package

ENTRYPOINT ["java","-jar","/home/app/target/team03-1.0.0.jar"]