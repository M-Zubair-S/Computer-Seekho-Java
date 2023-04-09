package com.example.demo;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Student")
public class Student {
   
	private int studentId;
	private int studentbatchId;
	private String studentName;
    private String studentAddress;
    private String studentGender;
    private String photoUrl;
    private LocalDate studentDob;
    private String qualification;
    private String studentMobileNo;
    private String studentPassword;
    private String studentUsername;
    private Set<com.example.demo.Payment> StudentPayment ;
    
	public Student(int studentId, int studentbatchId, String studentName, String studentAddress, String studentGender,
			String photoUrl, LocalDate studentDob, String qualification, String studentMobileNo, String studentPassword,
			String studentUsername, Set<com.example.demo.Payment> payment) {
		super();
		this.studentId = studentId;
		this.studentbatchId = studentbatchId;
		this.studentName = studentName;
		this.studentAddress = studentAddress;
		this.studentGender = studentGender;
		this.photoUrl = photoUrl;
		this.studentDob = studentDob;
		this.qualification = qualification;
		this.studentMobileNo = studentMobileNo;
		this.studentPassword = studentPassword;
		this.studentUsername = studentUsername;
		StudentPayment = payment;
	}


	public Student()
	{
		
	}

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getStudentId() {
		return studentId;
	}


	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}


	public int getStudentbatchId() {
		return studentbatchId;
	}


	public void setStudentbatchId(int studentbatchId) {
		this.studentbatchId = studentbatchId;
	}


	public String getStudentName() {
		return studentName;
	}


	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}


	public String getStudentAddress() {
		return studentAddress;
	}


	public void setStudentAddress(String studentAddress) {
		this.studentAddress = studentAddress;
	}


	public String getStudentGender() {
		return studentGender;
	}


	public void setStudentGender(String studentGender) {
		this.studentGender = studentGender;
	}


	public String getPhotoUrl() {
		return photoUrl;
	}


	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}


	public LocalDate getStudentDob() {
		return studentDob;
	}


	public void setStudentDob(LocalDate studentDob) {
		this.studentDob = studentDob;
	}


	public String getQualification() {
		return qualification;
	}


	public void setQualification(String qualification) {
		this.qualification = qualification;
	}


	public String getStudentMobileNo() {
		return studentMobileNo;
	}


	public void setStudentMobileNo(String studentMobileNo) {
		this.studentMobileNo = studentMobileNo;
	}


	public String getStudentPassword() {
		return studentPassword;
	}


	public void setStudentPassword(String studentPassword) {
		this.studentPassword = studentPassword;
	}


	public String getStudentUsername() {
		return studentUsername;
	}


	public void setStudentUsername(String studentUsername) {
		this.studentUsername = studentUsername;
	}

	@Access(AccessType.PROPERTY)
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="StudentPaymentId" , referencedColumnName="studentId")
	public Set<Payment> getPayment() {
		return StudentPayment;
	}
	
	
	public void setPayment(Set<Payment> payment) {
		StudentPayment = payment;
	}



}
