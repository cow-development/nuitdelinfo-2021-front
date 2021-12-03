<template>
  <div class="input-search">
    <input
      type="text"
      :placeholder="placeholderText"
      v-model="search"
      @focus="showResults = true"
      @blur="showResults = false"
      @input="getFilteredResults()"
    />
    <div class="results" v-if="showResults">
      <div
        class="result"
        v-for="(result, index) in results"
        :key="index"
        @mousedown="selectResult(result)"
      >
        Sauvetage du {{ result.rescueDate | dateFormatter }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "InputSearch",
  data: () => ({
    search: "",
    showResults: false,
    placeholderText: "Search",
    results: [],
  }),
  methods: {
    ...mapActions(['setActiveRescue', 'toggleDrawer']),
    filter(str, rescues = []) {
      return rescues.filter(rescue => {
          const joinedActors = []
            .concat(
              (rescue.rescued || []),
              (rescue.rescuers || []),
              (rescue.unrescued || [])
            );
        
          return joinedActors
            .find(
              actor => actor.firstname.toLowerCase().includes(str.toLowerCase()) || actor.lastname.toLowerCase().includes(str.toLowerCase())
          );
      });
    },
    getFilteredResults() {
      this.results = this.filter(this.search, this.rescues);
    },
    selectResult(result) {
      console.log('result');
      this.setActiveRescue(result);
      this.toggleDrawer(true);      
    },
  },
  filters: {
    dateFormatter(date) {
      if(date) {
        date = new Date(date);
        const formatted = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        return formatted
      }
    }
  },
  computed: {
    ...mapGetters(['rescues']),
  },
};
</script>

<style lang="scss" scoped>
.input-search {
  display: flex;
  justify-content: center;
  min-width: 240px;
  input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border: 1px solid var(--primaryColor);
    border-radius: 4px;
    font-size: 14px;
    background-color: var(--primaryColor);
    color: var(--primaryText);
    transition: all 0.3s ease;
    &::placeholder {
      color: var(--secondaryText);
      font-style: italic;
    }
    &:focus {
      border: 1px solid var(--tintColor);
    }
  }
  .results {
    position: absolute;
    top: 100%;
    background-color: var(--primaryColor);
    padding: 12px 0px;
    width: fit-content;
    border-radius: 4px;
    font-size: 14px;
    animation: fade-enter 0.3s ease forwards;
    .result {
      padding: 10px 24px;
      color: var(--secondaryText);
      transition: all 0.3s ease;
      cursor: pointer;
      &:not(:last-child) {
        border-bottom: 1px solid var(--secondaryColor);
      }
      &:hover {
        background-color: var(--secondaryColor);
      }
    }
  }
}

@keyframes fade-enter {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>