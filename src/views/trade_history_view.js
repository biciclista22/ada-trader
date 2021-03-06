import Backbone from 'backbone';

const TradeHistoryView = Backbone.View.extend({
  initialize(params) {
    // this.trades = []; // took this out because don't need to store this data anymore
    this.template = params.template;

    // this.listenTo(this.model, 'update', this.bind);
  },
  bind() {
    // this.stopListening();

    this.model.each((quote) => {
      this.listenTo(quote, 'trade', this.render);
    });
  },
  render(data) {
    // this.trades.push(data); // don't need this code because we are not storing the data anymore

    // this.$('#trades').empty(); // no longer need this because not looping through the whole array of data objects

    // for (let i = (this.trades.length - 1); i > -1; i--) { // looping through trades in reverse
    //   let compiledTemplate = this.template(this.trades[i]);
    //   // console.log(compiledTemplate);
    //   this.$('#trades').append(compiledTemplate);
    // }
    // for (let i = 0; i < this.trades.length; i++) {
    //   let compiledTemplate = this.template(this.trades[i]);
    //   this.$('#trades').prepend(compiledTemplate);
    // }

    let compiledTemplate = this.template(data);
    this.$('#trades').prepend(compiledTemplate);

    return this;
  }
});

export default TradeHistoryView;
