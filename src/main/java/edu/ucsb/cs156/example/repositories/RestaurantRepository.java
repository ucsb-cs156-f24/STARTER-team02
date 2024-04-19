package edu.ucsb.cs156.example.repositories;

import edu.ucsb.cs156.example.entities.Restaurant;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * The RestaurantRepository is a repository for Restaurant entities
 */
@Repository
public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {
}
