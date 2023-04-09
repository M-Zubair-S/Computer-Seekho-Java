package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "FollowUp")
public class FollowUp {
	private int followup_id;
	private int Follow_upStaffId;
	private int Follow_upEnquiryId;
	private String followup_msg;
	private boolean is_active;

	public FollowUp() {

	}

	public FollowUp(int followup_id, int Follow_upStaffId, int Follow_upEnquiryId, String followup_msg,
			boolean is_active) {
		super();
		this.followup_id = followup_id;
		this.Follow_upStaffId = Follow_upStaffId;
		this.Follow_upEnquiryId = Follow_upEnquiryId;
		this.followup_msg = followup_msg;
		this.is_active = is_active;
	}

	public int getFollow_upStaffId() {
		return Follow_upStaffId;
	}

	public void setFollow_upStaffId(int follow_upStaffId) {
		Follow_upStaffId = follow_upStaffId;
	}

	public int getFollow_upEnquiryId() {
		return Follow_upEnquiryId;
	}

	public void setFollow_upEnquiryId(int follow_upEnquiryId) {
		Follow_upEnquiryId = follow_upEnquiryId;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getFollowup_id() {
		return followup_id;
	}

	public void setFollowup_id(int followup_id) {
		this.followup_id = followup_id;
	}

	public String getFollowup_msg() {
		return followup_msg;
	}

	public void setFollowup_msg(String followup_msg) {
		this.followup_msg = followup_msg;
	}

	public boolean isIs_active() {
		return is_active;
	}

	public void setIs_active(boolean is_active) {
		this.is_active = is_active;
	}

}
