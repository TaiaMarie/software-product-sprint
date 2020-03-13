package com.google.sps.servlets;

import com.google.cloud.translate.Translate;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;
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
      String text = getParameter(request, "text-input", "");
      aString.add(text);
      response.setContentType("application/json;");
      Gson gson = new Gson();
      String json = gson.toJson(aString);
      response.getWriter().println(json);

      
      // Get the request parameters.
     String originalText = request.getParameter("text");
     String languageCode = request.getParameter("languageCode");

     // Do the translation.
     Translate translate = TranslateOptions.getDefaultInstance().getService();
     Translation translation =
     translate.translate(originalText, Translate.TranslateOption.targetLanguage(languageCode));
     String translatedText = translation.getTranslatedText();

     // Output the translation.
     response.setContentType("text/html; charset=UTF-8");
     response.setCharacterEncoding("UTF-8");
     response.getWriter().println(translatedText);

      }

   @Override
   public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

       ArrayList<String> aString = new ArrayList<String>();
       String text = getParameter(request, "text-input", "");
       aString.add(text);
       response.setContentType("application/json;");
       Gson gson = new Gson();
       String json = gson.toJson(aString);
       response.getWriter().println(json);
       }

    @Override  
    private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    String value = request.getParameter(name);
    if (value == null) {
      return defaultValue;
    }
    return value;
  }


  
}
