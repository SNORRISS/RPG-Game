var obi;
var luke;
var maul;
var sidious;
var player;
var target = null;
var charSelected = false;
var obiDiv = $("#obi");
var lukeDiv = $("#luke");
var maulDiv = $("#maul");
var sidiousDiv = $("#sidious");
var targetDiv = null;

function Character(name, hp, attack, counter) {
  this.name = name;
  this.hp = hp;
  this.attack = attack;
  this.default = attack;
  this.counter = counter;
}

function initializeGame() {
  obi = new Character("Obi-wan Kenobi", 120, 20, 40);
  luke = new Character("Luke Skywalker", 100, 20, 40);
  maul = new Character("Darth Maul", 180, 20, 40);
  sidious = new Character("Darth Sidious", 150, 20, 40);
}

function makeEnemies(enemy1, enemy2, enemy3) {
  $(enemy1).attr("class", "enemy");
  $(enemy2).attr("class", "enemy");
  $(enemy3).attr("class", "enemy");

  $("#enemies").append(enemy1);
  $("#enemies").append(enemy2);
  $("#enemies").append(enemy3);
}

initializeGame();

$("body").on("click", ".character", function() {
  console.log("test2");
  if (!charSelected) {
    if ($(this).attr("id") == "obi") {
      player = obi;
      $("#player").html("<h1>Player</h1>");
      $("#player").append(obiDiv);
      makeEnemies(lukeDiv, maulDiv, sidiousDiv);
    }
    if ($(this).attr("id") == "luke") {
      player = luke;
      $("#player").html("<h1>Player</h1>");
      $("#player").append(lukeDiv);
      makeEnemies(obiDiv, maulDiv, sidiousDiv);
    }
    if ($(this).attr("id") == "sidious") {
      player = sidious;
      $("#player").html("<h1>Player</h1>");
      $("#player").append(sidiousDiv);
      makeEnemies(obiDiv, lukeDiv, maulDiv);
    }
    if ($(this).attr("id") == "maul") {
      player = maul;
      $("#player").html("<h1>Player</h1>");
      $("#player").append(maulDiv);
      makeEnemies(obiDiv, lukeDiv, sidiousDiv);
    }
    console.log("test3");
    //add enemies to the enemy section and remove them from char select
  }
});

$("body").on("click", ".enemy", function() {
  if ($(this).attr("id") == "obi") {
    if (player != obi) {
      if (target == null) {
        obiDiv.attr("class", "target");
        $("#defender").append(obiDiv);
        target = obi;
        targetDiv = obiDiv;
      } else {
        targetDiv.attr("class", "enemy");
        $("#enemies").append(targetDiv);
        obiDiv.attr("class", "target");
        $("#defender").append(obiDiv);
        target = obi;
        targetDiv = obiDiv;
      }
    }
  }
  if ($(this).attr("id") == "luke") {
    if (player != luke) {
      if (target == null) {
        lukeDiv.attr("class", "target");
        $("#defender").append(lukeDiv);
        target = luke;
        targetDiv = lukeDiv;
      } else {
        targetDiv.attr("class", "enemy");
        $("#enemies").append(targetDiv);
        lukeDiv.attr("class", "target");
        $("#defender").append(lukeDiv);
        target = luke;
        targetDiv = lukeDiv;
      }
    }
  }
  if ($(this).attr("id") == "sidious") {
    if (player != sidious) {
      if (target == null) {
        sidiousDiv.attr("class", "target");
        $("#defender").append(sidiousDiv);
        target = sidious;
        targetDiv = sidiousDiv;
      } else {
        targetDiv.attr("class", "enemy");
        $("#enemies").append(targetDiv);
        sidiousDiv.attr("class", "target");
        $("#defender").append(sidiousDiv);
        target = sidious;
        targetDiv = sidiousDiv;
      }
    }
  }
  if ($(this).attr("id") == "maul") {
    if (player != maul) {
      if (target == null) {
        maulDiv.attr("class", "target");
        $("#defender").append(maulDiv);
        target = maul;
        targetDiv = maulDiv;
      } else {
        targetDiv.attr("class", "enemy");
        $("#enemies").append(targetDiv);
        maulDiv.attr("class", "target");
        $("#defender").append(maulDiv);
        target = maul;
        targetDiv = maulDiv;
      }
    }
  }
});

$("#attack").on("click", function(player, enemy) {
  console.log("testtest");
  if (charSelected) {
    player.hp = player.hp - target.counter;
    target.hp = target.hp - player.attack;
    player.attack = player.attack + player.default;

    //add loss and kill
  }
});
