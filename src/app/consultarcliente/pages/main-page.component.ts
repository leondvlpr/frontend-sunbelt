import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DataPayload } from '../interfaces/DataPayload';
import { ConsultarService } from '../services/consultar.service';
import { messages } from '../config/messages';

@Component({
  selector: 'app-consultar-cliente-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // Definición de campos
  selectedDocumentType: string = 'C';
  inputDocumentNumber: number = 10121314;
  clientData: any;

  // Inyección del módulo de servicio
  constructor(private consultarService: ConsultarService) {}

  // Metodo post para petición al endpoint
  postData() {
    const data: DataPayload = {
      tipoDocumento: this.selectedDocumentType,
      numeroDocumento: this.inputDocumentNumber,
    };

    // Ejecución del endpoint
    this.consultarService.validateInformation(data).subscribe({
      next: (responseData) => {
        if (responseData?.code === 200) {
          this.clientData = responseData;
          this.showModal();
        }
      },
      error: (error) => {
        let errorMessage = this.handleValidateMessages(error.status);

        Swal.fire({
          icon: 'error',
          title: error?.error?.msj,
          text: errorMessage,
        });
      },
    });
  }

  // Funcion para mostrar modal
  private showModal() {
    document.getElementById("openModalButton")?.click();
  }

  // Funcion para manejar errores
  handleValidateMessages(status: number) {
    switch (status) {
      case 404:
        return messages.CLIENT_NOT_FOUND;

      case 400:
        return messages.FIELDS_IS_REQUIRED;

      case 500:
        return messages.INTERNAL_SERVER_ERROR;

      default:
        return messages.GENERIC_ERROR;
        break;
    }
  }
}
