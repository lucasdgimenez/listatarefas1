<template>
  <div>
    <h2 class="text-center">Cadastre uma tarefa</h2>
    <form>
      <label for>Nova tarefa:</label>
      <input type="text" class="form-control" v-model="novaTarefa" />
      <button type="submit" class="btn btn-success" @click.prevent="addTarefa()">
        <i class="fa fa-check-square"></i>
        Adicionar
      </button>
    </form>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "listCreate",
  data() {
    return {
      novaTarefa: "",
      todos: []
    };
  },
  methods: {
    addTarefa() {
      db.collection("listaTarefas")
        .add({
          texto: this.novaTarefa,
          completo: false,
          //id: this.todos.listaTarefa.id,
          createdAt: new Date()
        })
        .then(function(docRef) {
          console.log("Documento escrito com id: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Erro ao adicionar documento: ", error);
        });
      this.novaTarefa = "";
    }
  }
};
</script>

<style></style>
