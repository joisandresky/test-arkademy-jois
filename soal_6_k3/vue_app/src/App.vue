<template>
  <div id="app">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Tambah Programmer Baru"
                      aria-label="Tambah Programmer Baru"
                      aria-describedby="button-addon2"
                      v-model="name"
                    >
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="saveProgrammer"
                      >Tambah</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5 mb-5" v-for="p in programmers" :key="p.id">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <p>{{p.name}}</p>
                  <p>My Skills</p>
                </div>
                <div class="col-md-6 mt-3">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Tambah Skill Baru"
                      aria-label="Tambah Skill Baru"
                      aria-describedby="button-addon2"
                      v-model="skillName"
                    >
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="saveSkill(p.id)"
                      >Tambah</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      programmers: [],
      name: null,
      skillName: null
    };
  },
  mounted() {
    this.getProgrammers();
  },
  methods: {
    getProgrammers() {
      fetch("http://localhost:3000/api/programmers")
        .then(res => res.json())
        .then(res => {
          this.programmers = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    saveProgrammer() {
      if (!!this.name) {
        fetch("http://localhost:3000/api/programmers", {
          method: "POST",
          body: JSON.stringify({ name: this.name }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(res => {
            console.log("ssss", res);
            if (res && res.affectedRows > 0) {
              alert("Programmer Saved!");
              this.name = null;
              this.getProgrammers();
            } else {
              alert("Programmer Failed to Save!");
              this.getProgrammers();
            }
          })
          .catch(err => {
            console.log("err", err);
          });
      }
    },
    saveSkill(id) {
      fetch("http://localhost:3000/api/programmers/skills/" + id, {
        method: "POST",
        body: JSON.stringify({ skill_name: this.skillName }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res && res.affectedRows > 0) {
            alert("Skill Saved!");
            this.skillName = null;
            this.getProgrammers();
          } else {
            alert("Skill Failed to Save!");
            this.getProgrammers();
          }
        });
    }
  }
};
</script>

<style>
</style>
