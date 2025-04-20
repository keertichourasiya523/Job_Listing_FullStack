package com.jsp.springboot.joblisting.repository;

import java.util.List;

import com.jsp.springboot.joblisting.model.Post;

public interface SearchRepository {
	
	public List<Post> findByText(String text);

}
