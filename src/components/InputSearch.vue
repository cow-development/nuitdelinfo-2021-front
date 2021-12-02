<template>
  <div class="input-search">
    <input type="text" :placeholder="placeholderText" v-model="search" @focus="showResults = true" @blur="showResults = false" />
    <div class="results" v-if="showResults">
      <div
        class="result"
        v-for="(result, index) in filteredResults"
        :key="index">
        {{ result }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSearch',
  data: () => ({
    search: '',
    showResults: false,
    placeholderText: 'Search',
    results: [
      'Apple Pie with cream',
      'Banana Split with cream',
      'Cherry Pie with cream',
    ]
  }),
  computed: {
    filteredResults() {
      return this.results.filter(result => {
        return result.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
}
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
    transition: all .3s ease;
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
    animation: fade-enter .3s ease forwards;
    .result {
      padding: 10px 24px;
      transition: all .3s ease;
      cursor: pointer;
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
  } to {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>