import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { FormGroup,  FormBuilder,  Validators, NgForm } from '@angular/forms';
import { ApiService } from './api.service';
import Any = jasmine.Any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
    results: {};
    angForm: FormGroup;
    constructor(private fb: FormBuilder, private api: ApiService) {
        this.createForm();
    }
    createForm() {
        this.angForm = this.fb.group({
            sentence: ['', Validators.required ]
        });
    }
  onSubmit(form: NgForm) {
      console.log(form);
      this.api.contwords(form)
  .subscribe(res => {
      this.results = res;
      // this.router.navigate(['/movie-details', id]);
  }, (err) => {
      console.log(err);
  });
  }
}
