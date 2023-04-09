package com.example.demo;

import java.time.LocalDate;
//import java.util.Date;
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
@Table(name = "Enquiry")
public class Enquiry {
	private int enquiry_id;
	private int EnquiryStaffId;
	private String enquirer_name;
	private String enquirer_address;
	private int enquirer_mobile;
	private int enquirer_alternate_mobile;
	private String enquirer_email_id;
	private LocalDate enquiry_date;
	private String enquirer_query;
	private LocalDate follow_up_date;
	private Set<FollowUp> FollowUp;

	public Enquiry() {

	}

	public Enquiry(int enquiry_id, int EnquiryStaffId, String enquirer_name, String enquirer_address,
			int enquirer_mobile,
			int enquirer_alternate_mobile, String enquirer_email_id, LocalDate enquiry_date, String enquirer_query,
			LocalDate follow_up_date, Set<com.example.demo.FollowUp> followUp) {
		super();
		this.enquiry_id = enquiry_id;
		this.EnquiryStaffId = EnquiryStaffId;
		this.enquirer_name = enquirer_name;
		this.enquirer_address = enquirer_address;
		this.enquirer_mobile = enquirer_mobile;
		this.enquirer_alternate_mobile = enquirer_alternate_mobile;
		this.enquirer_email_id = enquirer_email_id;
		this.enquiry_date = enquiry_date;
		this.enquirer_query = enquirer_query;
		this.follow_up_date = follow_up_date;
		FollowUp = followUp;
	}

	public int getEnquiryStaffId() {
		return EnquiryStaffId;
	}

	public void setEnquiryStaffId(int enquiryStaffId) {
		EnquiryStaffId = enquiryStaffId;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getEnquiry_id() {
		return enquiry_id;
	}

	public void setEnquiry_id(int enquiry_id) {
		this.enquiry_id = enquiry_id;
	}

	public String getEnquirer_name() {
		return enquirer_name;
	}

	public void setEnquirer_name(String enquirer_name) {
		this.enquirer_name = enquirer_name;
	}

	public String getEnquirer_address() {
		return enquirer_address;
	}

	public void setEnquirer_address(String enquirer_address) {
		this.enquirer_address = enquirer_address;
	}

	public int getEnquirer_mobile() {
		return enquirer_mobile;
	}

	public void setEnquirer_mobile(int enquirer_mobile) {
		this.enquirer_mobile = enquirer_mobile;
	}

	public int getEnquirer_alternate_mobile() {
		return enquirer_alternate_mobile;
	}

	public void setEnquirer_alternate_mobile(int enquirer_alternate_mobile) {
		this.enquirer_alternate_mobile = enquirer_alternate_mobile;
	}

	public String getEnquirer_email_id() {
		return enquirer_email_id;
	}

	public void setEnquirer_email_id(String enquirer_email_id) {
		this.enquirer_email_id = enquirer_email_id;
	}

	public LocalDate getEnquiry_date() {
		return enquiry_date;
	}

	public void setEnquiry_date(LocalDate enquiry_date) {
		this.enquiry_date = enquiry_date;
	}

	public String getEnquirer_query() {
		return enquirer_query;
	}

	public void setEnquirer_query(String enquirer_query) {
		this.enquirer_query = enquirer_query;
	}

	public LocalDate getFollow_up_date() {
		return follow_up_date;
	}

	public void setFollow_up_date(LocalDate follow_up_date) {
		this.follow_up_date = follow_up_date;
	}

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "Follow_upEnquiryId", referencedColumnName = "enquiry_id")
	public Set<FollowUp> getFollowUp() {
		return FollowUp;
	}

	public void setFollowUp(Set<FollowUp> followUp) {
		FollowUp = followUp;
	}

}
