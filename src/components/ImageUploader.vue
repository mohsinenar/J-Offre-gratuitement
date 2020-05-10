<template>
        <div class="container">
        <div class="status has-background-danger">
                    
        </div>
        <b-button @click="CancelImage(ImageIndex)" class="cancel  is-small"  type="is-danger"
                icon-right="times" />
         <img :src="downloadURL" style="height:100%;width:100% z-index:1" alt="">
            <div style="width:100%;  position:relative">
                <b-progress class="Loadingbare" size="is-small" :show-value="true" :type="ProgressType"  v-bind:value="progress"></b-progress>
            </div>
        </div>
</template>

<script>
import firebase from "firebase/app";
export default {
    data(){
       return {
           imageRef:null,
           progress:0.0,
           uploadTask:{},
           downloadURL:'./no-pictures.svg'
       }
    },
  name: 'imageuploader',
  props:{image:File,ImageIndex:Number},
  computed:{
      ProgressType:function(){
          if (this.progress>=60){return "is-success"}
          if (this.progress>=30){return "is-warning"}
          if (this.progress<30){return "is-danger"}
      }
  },
  methods:{
      Uploadfiled(err){
          console.error(err)
      },
      UploadCompleted(){
           this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL=>{
               this.downloadURL = downloadURL;
               var paylod = {"fullPath":downloadURL,"ImageIndex":this.ImageIndex}
               this.$emit("UploadCompleted",paylod)
            });
      },
      startUpload(){
          console.log("startLoading");
          var tempName = Math.random() +"_"+ this.image.size ;
          this.imageRef=firebase.storage().ref().child("Listings/"+tempName)
          this.uploadTask = this.imageRef.put(this.image)
          this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,snapshot=> {
                this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error)=>{this.Uploadfiled(error)},
          ()=>{this.UploadCompleted()},
          )
      },
      CancelImage(ImageIndex){
          this.uploadTask.cancel()
          this.$emit("CancelImage",ImageIndex)
      }
  },
  mounted:function(){
    this.startUpload()
  }
}
</script>
<style>
.container{
    height:100%;
    width:100%;
    padding: 5px;
}
.cancel{
    position: absolute;
    top:-5px;
    left: -5px;
    margin: 5px;
}
.Loadingbare{
    width: 100%;
    position: absolute;
    bottom: 5px;
    border-radius: 0 !important;
}
.status{
    position: absolute;
    z-index:2
}
</style>