<template>
  <ul class="itemTarefa container">
    <li v-for="todo in todos" :key="todo.id" class="row liGeral">
      <label v-if="atualEditar !== todo.id" class="col li">
        <input type="checkbox" v-model="todo.completo" @change="updateTarefa(todo)" />
        <p>{{todo.texto}}</p>
      </label>
      <div v-if="atualEditar !== todo.id" class="li">
        <button @click="editarTarefa(todo)" class="btn btn-primary col">
          <i class="fas fa-marker"></i>
        </button>
        <button @click="deletaTarefa(todo)" class="btn btn-danger col">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <form v-else>
        <label>
          Editar tarefa:
          <input type="text" v-model="textoTarefa" />
        </label>
        <button type="submit" @click.prevent="updateTextoTarefa()" class="btn btn-success">
          <i class="fa fa-check"></i>
        </button>
      </form>
    </li>
  </ul>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "listRead",
  data() {
    return {
      todos: [],
      atualEditar: null,
      textoTarefa: ""
    };
  },
  firestore() {
    return {
      todos: db.collection("listaTarefas").orderBy("createdAt", "desc")
    };
  },
  methods: {
    updateTarefa(todo) {
      db.doc(todo.id)
        .update({ ...todo })
        .then(function(docRef) {
          console.log("Updated document with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error updating document: ", error);
        });
    },
    deletaTarefa(todo) {
      db.collection("listaTarefas")
        .doc(todo.id)
        .delete();
    },
    editarTarefa(todo) {
      this.atualEditar = todo.id;
      this.textoTarefa = todo.texto;
    },
    updateTextoTarefa() {
      db.collection("listaTarefas")
        .doc(this.atualEditar)
        .update({
          texto: this.textoTarefa
        })
        .then(function() {
          console.log("Updated document successfully!");
        })
        .catch(function(error) {
          console.error("Error updating document text: ", error);
        });
      this.atualEditar = null;
      this.textoTarefa = "";
    }
  }
};
</script>

<style>
.itemTarefa {
  margin-top: 20px;
}
.li {
  display: flex;
  margin-top: 10px;
  padding: 5px;
}
.liGeral {
  border-bottom: 1px solid black;
  margin-top: 10px;
}
.li p {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
