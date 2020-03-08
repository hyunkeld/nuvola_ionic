import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-show',
  templateUrl: './client-show.page.html',
  styleUrls: ['./client-show.page.scss'],
})
export class ClientShowPage implements OnInit {

  id: any;
  user: any;
  updateMode: boolean = false;
  public form: FormGroup;
  base64Image;
  loading;

  constructor(
    public clientsService: ClientsService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private nav: NavController,
    private camera: Camera,
    private fb: FormBuilder) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.updateMode = this.id ? true : false;

    this.form = this.fb.group({
      "documento": ["", Validators.compose([Validators.required])],
      "nombre": ["", Validators.compose([Validators.required])],
      "apellido": ["", Validators.compose([Validators.required])],
      "nombre_completo": [""],
      "telefono": ["", Validators.compose([Validators.required])],
      "email": ["", Validators.compose([Validators.required])],
      "direccion": ["", Validators.compose([Validators.required])],
      // "created_at": ["", Validators.compose([Validators.required])],
      // "updated_at": ["", Validators.compose([Validators.required])],
      "comment": ["", Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    if (this.updateMode)
      this.getClient()
  }


  getClient() {
    this.clientsService.show(this.id)
      .subscribe(data => {
        this.user = data[0]
        this.fillForm()
      })
  }


  async updateClient() {
    await this.presentLoading()
    this.form.controls['nombre_completo'].setValue(this.form.controls['nombre'].value + " " + this.form.controls['apellido'].value)
    this.clientsService.update(this.id, this.form.value)
      .subscribe(async response => {
        await this.loading.onDidDismiss();
        this.presentAlert('Listo', 'Cliente actualizado correctamente')
        this.nav.pop()
      }, async errr => {
        await this.loading.onDidDismiss();
        this.presentAlert('Error', 'No fue posible actualizar el cliente, verifique su conexión y vuelva a intentarlo')
      })
  }

  async createClient() {
    await this.presentLoading()
    this.form.controls['nombre_completo'].setValue(this.form.controls['nombre'].value + " " + this.form.controls['apellido'].value)
    this.clientsService.create(this.form.value)
      .subscribe(async response => {
        await this.loading.onDidDismiss();
        this.presentAlert('Listo', 'Cliente guardado correctamente')
        this.nav.pop()
      }, async errr => {
        await this.loading.onDidDismiss();
        this.presentAlert('Error', 'No fue posible guardar el cliente, verifique su conexión y vuelva a intentarlo')
      })
  }


  capturePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: this.camera.Direction.FRONT,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }


  private fillForm() {
    for (let i in this.user) {
      if (this.form.controls[i])
        this.form.controls[i].setValue(this.user[i])
    }
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
