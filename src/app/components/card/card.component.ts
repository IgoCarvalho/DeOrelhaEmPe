import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OccurrenceDataService } from 'src/app/services/occurrence-data.service';
import { OccurrenceService } from 'src/app/services/occurrence.service';
import { delay, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  loading: boolean;
  id: any;
  mostrar = false;
  mostrarFeed = false;
  isOpen = false

  data: any;
  @ViewChild('f') form: NgForm;

  user;

  selectcItens = [
    { key: 'recebido', name: 'Recebido' },
    { key: 'triagem', name: 'Triagem' },
    { key: 'em-andamento', name: 'Em andamento' },
    { key: 'resolvido', name: 'Resolvido' },
  ]

  timeLie:any[] = [
    { key: 'nao-lido', name: 'Não lido' },
    { key: 'recebido', name: 'Recebido' },
    { key: 'triagem', name: 'Triagem' },
    { key: 'em-andamento', name: 'Em andamento' },
    { key: 'resolvido', name: 'Resolvido' },
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private occDataService: OccurrenceDataService,
    private occService: OccurrenceService,
    private toast: ToastrService,
    private authService: AuthService

  ) { }

  ngOnInit() {
    this.loading = true
    this.user = this.authService.getUser()
    this.activatedRoute.params.pipe(delay(200)).subscribe(param => {
      this.id = param['id']
      // alert(this.id)
      // this.data = this.occDataService.getOneData(this.id)
      this.occDataService.setOneDataById(this.id)
      console.log(this.data)
      this.mostrarBtn()
    });
    console.log('card xxx')
    this.occDataService.oneData.subscribe((res: any) => {
      
      res? console.log('acc', res.user): console.log('accbb', res)
      console.log('xxa', this.user)
      this.data = res
      this.loading = false
    })

    // this.readStatus()
  }


  mostrarBtn() {
    // alert('mostra')
    if (this.router.url == "/ccz/info/" + this.id) {
      this.mostrar = true;
    }
    else {
      this.mostrar = false;
    }
  }

  submit(form) {
    if (form.invalid) return
    let up = form.value
    up.id = this.id

    this.occService.updateStatus(up).subscribe(res => {
      // alert('status atualizado')
      console.log('xacccccc',res)
      this.toast.success('status atualizado com sucesso', 'Status')
      this.occDataService.setOneData(res)
      form.onReset()

    })
  }

  selectCategory(selected) {
    this.form.form.patchValue({
      status: selected
    })
    console.log(this.form.value)
  }
  addComent(form) {
    if (form.invalid) return
    let co = form.value
    co.id = this.id



    this.occService.coment(co).subscribe((res: any) => {
      // alert('comentario enviado')
      console.log(res)
      this.toast.success('comentario enviado com sucesso', 'Comentario')
      this.occDataService.setOneData(res)
      form.onReset()
    })
  }

  back() {
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  }

  readStatus(a){
    // let a = { key: 'recebido', name: 'Recebido' };
    let muda = true
    for(let s of this.timeLie){
      if(muda){
        if(s.key == a.key){
          muda = false
        }
        s.ok = true
      }else{
        s.ok = false

      }
    }
    console.log(this.timeLie)
    return this.timeLie

  }

}
