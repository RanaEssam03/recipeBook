import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component ({
  selector: "add-component",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})


export class AddComponent{
  formGroup!: FormGroup;
  itemsList!: any [];
  @Output() onChange = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: '',
      details: '',
      image: ''
    });
  }

  onSubmit() {
        console.log('Form Submitted');
    // Save the form data in local storage
    let list = localStorage.getItem('items');
    if(list == null){
      list = '[]';
    }
       this.itemsList = JSON.parse(list) as [];


    let values = {
      name: this.formGroup.get('name')!.value,
      details: this.formGroup.get('details')!.value,
      image: this.formGroup.get('image')!.value

    }
    this.itemsList.push(values);
    localStorage.setItem('items', JSON.stringify(this.itemsList));
    this.formGroup.reset();
    this.onChange.emit(this.itemsList)
  }
}

// template driven forms
// custom validator


