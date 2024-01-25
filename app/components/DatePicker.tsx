interface DatePickerTaskProps {
  handleDateChoice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedDate: string;
}

function DatePicker({ handleDateChoice, selectedDate }: DatePickerTaskProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="date">Task completion date</label>
      <input
        type="date"
        name="date"
        id="date"
        value={selectedDate}
        className="w-52 rounded-lg border px-3 py-1 dark:bg-zinc-900"
        onChange={(e) => handleDateChoice(e)}
      />
    </div>
  );
}
export default DatePicker;
