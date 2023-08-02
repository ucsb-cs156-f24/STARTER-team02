import BasicLayout from "main/layouts/BasicLayout/BasicLayout";

export default function PlaceholderIndexPage() {

  // Stryker disable all : placeholder for future implementation
  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>This page not yet implemented</h1>
        <a href="/placeholder/create">Create</a>
        <a href="/placeholder/edit/1">Edit</a>
      </div>
    </BasicLayout>
  )
}
