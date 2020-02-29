package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import com.google.gson.Gson;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")

public class DataServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      ArrayList<String> aString = new ArrayList<String>();
      aString.add("Hawaii");
      aString.add("Kansas");
      aString.add("Washington");
      
      Gson gson = new Gson();
      String json = gson.toJson(aString);

      response.setContentType("text/html;");
      response.getWriter().println(json);

    
  }
  
}
