<!--añadir todo el body -->
<template>

    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    P&aacute;gina 2 
                </ion-title>
            </ion-toolbar>    
        </ion-header>
        <ion-content class="ion-padding">
            Contenido de la p&aacute;gina 2

            <ion-button router-link="/paginUno"> 
                Ir a p&aacute;gina 2 
            </ion-button>

            <h1> Hola {{ $router.params.nombre }} </h1>

        </ion-content>
    </ion-page>


</template>

<!--para añadir los script javascript-->
<script>
// importacion de los componentes bases de Ionic  
import { IonPage, IonHeader , IonToolbar , IonTitle ,  IonContent} from '@ionic/vue' 



export default {

    // exportacion del componente vue.js 
    name: 'Paginados', 
    components:{
        IonPage , 
        IonHeader , 
        IonToolbar , 
        IonTitle ,
        IonContent
    }

}
</script>


<style>

</style>