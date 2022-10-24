<template>
<div>
  <b-jumbotron header="About Me" lead="A little bit about myself..."></b-jumbotron>
  <b-container>
    <b-img id="about-image" class="mx-5 my-2 float-left" :src="require('@/assets/about.jpg')" alt="About image" rounded="circle"></b-img>
    <p class="lead pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nisi quas laboriosam facilis sint et nostrum fugit aperiam nesciunt aut cumque labore molestias consectetur, possimus voluptatum. Asperiores quo voluptatum maxime aliquid perferendis provident porro tempore reprehenderit labore voluptate excepturi adipisci necessitatibus ducimus, accusamus harum officia cumque sunt sequi sit. Ipsam ratione ab minus odit architecto debitis obcaecati in, perferendis voluptatum reiciendis aliquid at. Aliquid illo consequuntur possimus porro dicta, laudantium, iure eius non facilis minima, vero qui repudiandae molestiae ea pariatur libero officia beatae eos fuga. Dicta similique saepe pariatur maiores numquam veniam, porro ullam impedit laboriosam eos sapiente maxime nobis exercitationem sit aliquid ad voluptas molestiae! Delectus sapiente reprehenderit consectetur perspiciatis eligendi aliquam temporibus expedita illum neque asperiores vitae, corrupti similique ipsam quaerat non facere! Eos voluptate dolorum accusantium alias. Illo ipsa aliquam accusantium doloremque quis et dolore soluta rerum, quasi, nulla maxime architecto aperiam sequi omnis dignissimos, doloribus deleniti cum id repellat laborum dolores. Consectetur deleniti aliquid, quas sed quaerat, deserunt sint iure fugit dolorum iusto et asperiores quo, illum possimus magnam dolores exercitationem optio est facere tempore dicta vel ipsam! Voluptas, delectus? Illo consequatur exercitationem, adipisci non voluptatum a et dolor! Repellendus error quo illo dolorum voluptatem hic voluptas unde facilis soluta repellat earum deserunt necessitatibus rerum eum, laudantium quod atque placeat doloribus beatae blanditiis delectus? Eaque laudantium ullam suscipit ratione sit, ex autem voluptatibus. Explicabo, nesciunt atque unde voluptas architecto harum neque facere iusto aspernatur, quam ab. Accusantium soluta nihil harum laborum repudiandae possimus dolorem earum ratione incidunt fugit culpa nam, corporis ipsa officia molestias provident eos? Ipsum dolores laborum repellat maxime aut quod fuga cumque voluptatum harum recusandae molestias necessitatibus, expedita dolorum ullam! Suscipit, delectus libero temporibus odit iure placeat aliquam possimus nihil, consectetur quisquam ex deserunt totam quos eum hic quibusdam eius ipsum repellat, voluptas culpa amet at. Voluptatum quisquam eligendi quas animi, nesciunt at labore provident neque fugiat fugit id consequatur maiores mollitia sapiente doloribus in hic iusto itaque ad. Quasi voluptatibus facilis sit facere sunt repellat. Fugiat sequi dolore numquam facere? Neque temporibus mollitia ex quae fugiat autem molestias sit eos quas eum esse, similique recusandae harum? Sequi officia quia repudiandae sit esse nobis, ipsa atque assumenda odio voluptatem odit. Maxime fugiat animi tenetur soluta iste fugit, doloribus inventore assumenda dolorum illum dolore nobis distinctio asperiores quaerat quis quod, et eaque provident, natus iusto nemo. Ratione, earum. Repudiandae nihil ut nulla ipsa!</p>
  </b-container>
  
</div>
</template>

<script>
export default {
  head: {
    title: {
      inner: "About Me",
      complement: "Luke Ahrens-Townsend"
    }
  }
};
</script>

<style scoped>
#about-image {
  border: 2px solid #e9ecef;
  height: 15em;
}
</style>