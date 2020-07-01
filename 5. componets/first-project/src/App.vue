<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <!-- Quotes Project Start -->
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
       <div class="col-sm-12 text-center">
         <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
      </div>
    </div>
    <!-- Quotes Project End -->
  </div>
</template>

<script>
import QuoteGrid from "./components/quoteProject/QuoteGrid";
import NewQuote from "./components/quoteProject/NewQuote";
import Header from "./components/quoteProject/Header";

export default {
  data: function() {
    return {
      quotes: ["Just a Qoute to see something"],
      maxQuotes: 10
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert ('Please delete Quotes first!');
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
};
</script>

<style>
</style>
