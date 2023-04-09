package com.example.demo;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Staff")
public class Staff {

	private int staff_id;
	private String staff_name;
	private String photo_url;
	private int staff_mobile;
	private String userId;
	private String password;
	private Set<FollowUp> Followup;
	private Set<Enquiry> Enquiry;

	public Staff() {

	}

	public Staff(int staff_id, String staff_name, String photo_url, int staff_mobile, String userId, String password,
			Set<FollowUp> followup, Set<com.example.demo.Enquiry> enquiry) {
		super();
		this.staff_id = staff_id;
		this.staff_name = staff_name;
		this.photo_url = photo_url;
		this.staff_mobile = staff_mobile;
		this.userId = userId;
		this.password = password;
		Followup = followup;
		Enquiry = enquiry;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getStaff_id() {
		return staff_id;
	}

	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
	}

	public String getStaff_name() {
		return staff_name;
	}

	public void setStaff_name(String staff_name) {
		this.staff_name = staff_name;
	}

	public String getPhoto_url() {
		return photo_url;
	}

	public void setPhoto_url(String photo_url) {
		this.photo_url = photo_url;
	}

	public int getStaff_mobile() {
		return staff_mobile;
	}

	public void setStaff_mobile(int staff_mobile) {
		this.staff_mobile = staff_mobile;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "Follow_upStaffId", referencedColumnName = "staff_id")
	public Set<FollowUp> getFollowup() {
		return Followup;
	}

	public void setFollowup(Set<FollowUp> followup) {
		Followup = followup;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "EnquiryStaffId", referencedColumnName = "staff_id")
	public Set<Enquiry> getEnquiry() {
		return Enquiry;
	}

	public void setEnquiry(Set<Enquiry> enquiry) {
		Enquiry = enquiry;
	}

}
