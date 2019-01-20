export default {

  getElementIndex(table, searched_id) {
    return table.findIndex(element => {
      return element.id === searched_id
    });
  }
}