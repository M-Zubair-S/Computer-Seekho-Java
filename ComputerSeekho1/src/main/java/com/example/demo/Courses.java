package com.example.demo;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Courses")
public class Courses {

	 private int courseId;
	 private String courseName;
	 private String courseDescription;
	 private int courseDuration;
	 private double courseFees;
	 private String courseSyllabus;
	 private String ageGroupType;
	 private boolean isActive;
	 private Set<Batch> Batches;
	
	private Set<Payment> CoursePayment;
	public Courses(int courseId, String courseName, String courseDescription, int courseDuration, double courseFees,
			String courseSyllabus, String ageGroupType, boolean isActive, Set<Batch> batches,Set<Payment> payments) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseDescription = courseDescription;
		this.courseDuration = courseDuration;
		this.courseFees = courseFees;
		this.courseSyllabus = courseSyllabus;
		this.ageGroupType = ageGroupType;
		this.isActive = isActive;
		Batches = batches;
		CoursePayment=payments;
	}
	public Courses()
	{
		
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getCourseDescription() {
		return courseDescription;
	}
	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}
	public int getCourseDuration() {
		return courseDuration;
	}
	public void setCourseDuration(int courseDuration) {
		this.courseDuration = courseDuration;
	}
	public double getCourseFees() {
		return courseFees;
	}
	public void setCourseFees(double courseFees) {
		this.courseFees = courseFees;
	}
	public String getCourseSyllabus() {
		return courseSyllabus;
	}
	public void setCourseSyllabus(String courseSyllabus) {
		this.courseSyllabus = courseSyllabus;
	}
	public String getAgeGroupType() {
		return ageGroupType;
	}
	public void setAgeGroupType(String ageGroupType) {
		this.ageGroupType = ageGroupType;
	}
	public boolean isActive() {
		return isActive;
	}
	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="courseBatchId" , referencedColumnName="courseId")
	public Set<Batch> getBatches() {
		return Batches;
	}
	public void setBatches(Set<Batch> batches) {
		Batches = batches;
	}
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="coursePaymentId" , referencedColumnName="courseId")
	 public Set<Payment> getPayment() {
			return CoursePayment;
		}
		public void setPayment(Set<Payment> payment) {
			CoursePayment = payment;
		}    
	
}
