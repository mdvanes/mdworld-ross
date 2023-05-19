<script lang="ts">
  import '$lib/components/Lightbox/Lightbox.scss';

  export let imgpath: string;
  export let imgtitle: string;

  let lightboxDialog: HTMLDialogElement;

  const handleClick = () => {
    if (lightboxDialog) {
      lightboxDialog.showModal();
    }
  };

  const handleClose = () => {
    if (lightboxDialog) {
      lightboxDialog.close();
    }
  };
</script>

<button class="lightbox" on:click={handleClick}>
  <img src={imgpath} alt={imgtitle} />
</button>

<dialog class="lightbox__dialog" bind:this={lightboxDialog}>
  <div class="lightbox__dialog-header">
    <h1>{imgtitle}</h1>
    <div>
      <button on:click={handleClose}>✕</button>
    </div>
  </div>
  <img src={imgpath} alt={imgtitle} />
</dialog>
