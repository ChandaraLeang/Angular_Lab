export class CounterComponent implements OnInit {

  counterValue: number;
  @Output() counterChange: EventEmitter<string>;

  constructor() {
    this.counterValue = 0;
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {
  }

  inc() {
    this.counterValue += 1;
    this.counterChange.emit(this.counterValue.toString());
  }

  dec() {
    this.counterValue -= 1;
    this.counterChange.emit(this.counterValue.toString());
  }
}