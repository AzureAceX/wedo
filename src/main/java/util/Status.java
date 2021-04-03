package util;

public enum Status {

	PENDING(0), DONE(1), COMPLETE(2);
	
	private int value;

	private Status(int value) { 
		this.value = value; 
		}

}
