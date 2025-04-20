package com.jsp.springboot.joblisting.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jsp.springboot.joblisting.model.Post;

public interface PostRepository extends MongoRepository<Post,String>{

}
