import { Component, OnInit } from '@angular/core';
import { AcoesService } from 'src/app/services/acoes.service';
@Component({
  selector: 'app-ccz-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss']
})
export class AcoesCczComponent implements OnInit {
  acoes = [];
  constructor(private acoesService: AcoesService) { }
  ngOnInit() {
    this.acoesService.getAll().subscribe((res: any) => {
      this.acoes = res;
    });
  }
  onSubmit(aForm) {
    if (!aForm.valid) {
      // this.toaster.warning('Existem campos em ranco no formulário', 'Validação') 
      return;
    }
    let form = <HTMLFormElement>document.getElementById('myForm');
    let formData = new FormData(form);
    this.acoesService.save(formData).subscribe(res => {
      console.log(res);
      this.acoes.unshift(res);
    });
  }
  selectImage(e) {
    let label = document.getElementById('filePreview');
    let file = e.srcElement.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      console.log(fileReader.result);
      label.style.backgroundImage = `url(${fileReader.result})`;
    };
    fileReader.readAsDataURL(file);
  }
}
