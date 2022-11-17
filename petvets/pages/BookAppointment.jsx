
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const BookAppointment = () =>  {
    
return (
    <div>
    <h1>Date Input Page</h1>
    <div className={styles.formField}>
              <label className={styles.label}>Maturity Date with Time</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={datePickerValues.maturityDateWithTime}
                  onChange={handleDatePickerChange('maturityDateWithTime')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      label="Required"
                      size="small"
                      error={!!errors.maturityDateWithTime}
                      helperText={errors.maturityDateWithTime}
                    />
                  )}
                />
              </LocalizationProvider>
            </div>
    </div>)
}

export default BookAppointment;