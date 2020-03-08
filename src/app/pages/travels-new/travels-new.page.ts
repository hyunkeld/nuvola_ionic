import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AlertController, NavController, LoadingController } from '@ionic/angular';

import { TravelsService } from '../../services/travels.service'
import * as builderXML from 'xmlbuilder';

@Component({
  selector: 'app-travels-new',
  templateUrl: './travels-new.page.html',
  styleUrls: ['./travels-new.page.scss'],
})
export class TravelsNewPage implements OnInit {

  id;
  travelsUser: any[] = [];
  loading;
  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private travelsService: TravelsService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private nav: NavController,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("email");
    this.form = this.fb.group({
      "fecha_viaje": ["", Validators.compose([Validators.required])],
      "pais": ["", Validators.compose([Validators.required])],
      "departamento": ["", Validators.compose([Validators.required])],
      "ciudad": ["", Validators.compose([Validators.required])],
    })
  }

  addTravel() {
    this.travelsUser.push(this.form.value)

    console.log(this.travelsUser)
  }

  async saveTravel() {
    await this.presentLoading()
    const travels = builderXML.create('viajes')
    this.travelsUser.forEach(element => {
      const travel = travels.ele('viaje')
      const dataForm = element;
      travel.ele('email_cliente', null, this.id)
      for (let i in dataForm) {
        travel.ele(i, null, dataForm[i])
      }

    });
    var xml = travels.end({ pretty: true });
    console.log(xml);


    this.travelsService.save(xml)
      .subscribe(async response => {
        await this.loading.onDidDismiss();
        this.presentAlert('Listo', 'Viaje creado correctamente')
        this.nav.pop()
      }, async errr => {
        await this.loading.onDidDismiss();
        this.presentAlert('Error', 'No fue posible crear el viaje, verifique su conexión y vuelva a intentarlo')
      })

  }


  async presentAlert(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Espera un momento..',
      duration: 2000
    });
    await this.loading.present();
  }

}
