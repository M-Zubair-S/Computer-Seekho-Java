package com.example.demo;

import java.util.Date;
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
@Table(name = "Batch")
public class Batch {

	private int batchId;
	private int courseBatchId;
	private String batchName;
	private Date startTime;
	private Date endTime;
	private boolean isActive;
	private Date finalPresentationDate;
	private Set<Student> Student;

	public Batch() {

	}

	public Batch(int batchId, int courseBatchId, String batchName, Date startTime, Date endTime, boolean isActive,
			Date finalPresentationDate, Set<Student> students) {
		super();
		this.batchId = batchId;
		this.courseBatchId = courseBatchId;
		this.batchName = batchName;
		this.startTime = startTime;
		this.endTime = endTime;
		this.isActive = isActive;
		this.finalPresentationDate = finalPresentationDate;
		Student = students;
	}

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "studentbatchId", referencedColumnName = "batchId")
	public Set<Student> getStudent() {
		return Student;
	}

	public void setStudent(Set<Student> student) {
		Student = student;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getBatchId() {
		return batchId;
	}

	public void setBatchId(int batchId) {
		this.batchId = batchId;
	}

	public int getCourseBatchId() {
		return courseBatchId;
	}

	public void setCourseBatchId(int courseBatchId) {
		this.courseBatchId = courseBatchId;
	}

	public String getBatchName() {
		return batchName;
	}

	public void setBatchName(String batchName) {
		this.batchName = batchName;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public Date getFinalPresentationDate() {
		return finalPresentationDate;
	}

	public void setFinalPresentationDate(Date finalPresentationDate) {
		this.finalPresentationDate = finalPresentationDate;
	}

}
