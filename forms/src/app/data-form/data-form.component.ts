import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { DropdownService } from '../shared/services/dropdown.service';
import { Estado } from '../shared/models/estado.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: Estado[];

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService
  ) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.dropdownService.getEstadosBr().subscribe(
      dados => {
        this.estados = dados;
        console.log(dados);
      }
    )

    this.formulario = this.formBuilder.group({
      nome:         [ null, [ Validators.required, Validators.minLength(3) ] ],
      email:        [ null, [ Validators.required, Validators.email ] ],
      endereco: this.formBuilder.group({
        cep:          [ null, Validators.required ],
        numero:       [ null, Validators.required ],
        complemento:  [ null ],
        rua:          [ null, Validators.required ],
        bairro:       [ null, Validators.required ],
        cidade:       [ null, Validators.required ],
        estado:       [ null, Validators.required ]
      })
    });

  }

  onSubmit(){
    
    console.log(this.formulario);

    if( this.formulario.valid ){

      this.http.post('https://httpbin.org/post', 
      JSON.stringify(this.formulario.value) )
        .map( response => response )
        .subscribe( data => {
          console.log( data )
          this.resetar();
        },
        (error: any) => alert('error'));

    } else {

      this.verificaValidacoesForm( this.formulario );
      
    }
  }

  verificaValidacoesForm( formGroup: FormGroup ){
    Object.keys( formGroup.controls).forEach(
      campo => {

        const controle = formGroup.get(campo);
        controle.markAsDirty(); 
        
        if( controle instanceof FormGroup ){
          this.verificaValidacoesForm( controle );
        }
      } 
    );
  }
  resetar(){
    this.formulario.reset();
  }
  
  verificaValidTouched(campo: string){
    return !this.formulario.get(campo).valid && 
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty );
  }

  verificaEmailInvalido(){
    let campo = this.formulario.get('email');
    if(campo.errors){
      return campo.errors['email'] && campo.touched
    } 
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(){
    let cep = this.formulario.get('endereco.cep').value;
    
    cep = cep.replace(/\D/g, '');

    if( cep != ""){
      let validaCep =  /^[0-9]{8}$/;

      if( validaCep.test(cep)){
        this.resetaDadosForm();
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map( dados => dados.json())
          .subscribe(dados => this.populaDadosForm( dados ));
      }
    }
  }

  populaDadosForm(dados){

    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }


}
