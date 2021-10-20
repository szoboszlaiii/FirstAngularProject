import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  genres = ["Rablás", "Politika", "Időjárás"];
  news = { title2: '', body2: '', genre: this.genres[0]}

  form!: FormGroup;
  newsForm!: FormGroup;
  dynamicForm!: FormGroup;



  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    //reactive form
    this.form = this.formB.group({
      title: '',
      body: '',
    });
    //validáció
    this.newsForm = this.formB.group({

      title2: new FormControl(this.news.title2,[
        Validators.required, 
        Validators.minLength(4)
      ]),

      body2: new FormControl(this.news.body2,[
        Validators.required,
        Validators.minLength(20)
      ]),

      genre: new FormControl(this.news.genre, Validators.required)

    });
    //dinamikus form
    this.dynamicForm = this.formB.group({
      title: '',
      body: '',
      users: this.formB.array([])
    });
  }

  get title2() { return this.newsForm.get('title2')!; }

  get body2() { return this.newsForm.get('body2')!; }

  get genre() { return this.newsForm.get('genre')!; }

  get userForm(): FormArray{
    return this.dynamicForm.get('users') as FormArray;
  }

    updateProfile() {
      this.form.patchValue({
        title: 'Cim',
        body: 'tartalom'
      });
    }


    addUser(){
      const user = this.formB.group({
        email: '',
        name: '',
        password: ''
      });
      this.userForm.push(user);
    }

    deleteUser(i: number): void {
      this.userForm.removeAt(i);
    }

}

