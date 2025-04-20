package com.jsp.springboot.joblisting.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.springboot.joblisting.model.Post;
import com.jsp.springboot.joblisting.repository.PostRepository;
import com.jsp.springboot.joblisting.repositoryImpl.SearchRepositoryImpl;

import springfox.documentation.annotations.ApiIgnore;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class PostController {

	@Autowired
	PostRepository postRepo;
	
	@Autowired
	SearchRepositoryImpl searchRepositoryImpl;
	
	@ApiIgnore
	@RequestMapping(value="/")
	
	public void redirect(HttpServletResponse res) throws IOException {
		
		res.sendRedirect("/swagger-ui.html");
		
	}
	
	@GetMapping("/allPosts")
	
	public List<Post> getAllPosts(){
		
		return postRepo.findAll();
	}
	
	@GetMapping("/posts/{text}")
	public List<Post> search(@PathVariable String text){
		 return searchRepositoryImpl.findByText(text);
	}
	
	@PostMapping("/post")
	
	public Post addPost(@RequestBody Post post) {
	
		return postRepo.save(post);
	}
}
