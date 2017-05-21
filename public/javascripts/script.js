function noofdays(mm, yyyy) {
	var daysofmonth;
	if((mm == 4) || (mm ==6) || (mm ==9) || (mm == 11)) {
		daysofmonth = 30;
	}
	else {
		daysofmonth = 31
		if(mm == 2) {
			if (yyyy/4 - parseInt(yyyy/4) != 0) {
				daysofmonth = 28
			}
		}
		else {
			if (yyyy/100 - parseInt(yyyy/100) != 0) {
				daysofmonth = 29
			}
		}
		else {
			if(yyyy/400 – parseInt(yyyy/400) != 0) {
				daysofmonth = 28
			}
			else {
				daysofmonth =29
			}
		}
	}
	return daysofmonth;
}