<!--añadir todo el body -->
<template>

    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    P&aacute;gina Uno 
                </ion-title>
            </ion-toolbar>    
        </ion-header>
        <ion-content class="ion-padding">
            Contenido de la p&aacute;gina 1 
            <ion-button router-link="/paginados/ronal"> 
                Ir a p&aacute;gina 2 

            </ion-button>
        </ion-content>
    </ion-page>


</template>

<!--para añadir los script javascript-->
<script>
// importacion de los componentes bases de Ionic  
import { IonPage, IonHeader , IonToolbar , IonTitle ,  IonContent , IonButton} from '@ionic/vue' 



export default {

    // exportacion del componente vue.js 
    name: 'PaginaUno', 
    components:{
        IonPage , 
        IonHeader , 
        IonToolbar , 
        IonTitle ,
        IonContent , 
        IonButton 
    }

}
</script>


<style>

</style>