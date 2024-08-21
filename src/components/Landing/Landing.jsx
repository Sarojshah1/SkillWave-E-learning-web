import React from "react";
import NavBar from "./NavBar/NavBar";
import background from "../../assets/background.png";
import Header from "./Header/Header";
import Success from "./success/Success";
import Features from "./features/Features";
import CategoriesPage from "./categories/Categories";
import CoursesPage from "./courses/Courses";
import TestimonialsSection from "./Testimonial/TestimonialCard";
import FAQSection from "./FAQ/FAQSection";

const Landing = () => {
  return (
    <>
    <Header/>
    <Success/>
    <Features/>
    <CategoriesPage/>
    <CoursesPage/>
    <TestimonialsSection/>
    <FAQSection/>



      
    </>
  );
};

export default Landing;
