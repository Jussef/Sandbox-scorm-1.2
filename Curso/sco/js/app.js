const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("defaultCheck1");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("defaultCheck2");
let contador = 0;

btn1.addEventListener("click", function () {
  console.log("%c Btn 1", "font-size: 100%; color: #00AEFF; font-weight: 700;");
  document.getElementById("btn2").disabled = false;
  document.getElementById("contentVideo1").innerHTML =
  '<iframe id="video1" src="https://player.vimeo.com/video/461103236?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Conoce la certificación"></iframe>';
  // document.getElementById('contentVideo1').innerHTML = '<iframe id="video1" width="100%" height="315" src="https://www.youtube.com/embed/5oXvF1Wam7k" title="player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
});
btn2.onchange = function () {
  console.log("%c Btn 2", "font-size: 100%; color: #00AEFF; font-weight: 700;");
  if (btn2.checked === true) {
    visto(2);
  }
  document.getElementById("btn3").disabled = false;
};
btn3.addEventListener("click", function () {
  console.log("%c Btn 3", "font-size: 100%; color: #00AEFF; font-weight: 700;");
  document.getElementById("contentVideo1").innerHTML = '<audio id="audio1" controls> <source src="assets/audios/podcast.mp3" type="audio/mpeg"> Podcast </audio>'
  document.getElementById("btn4").disabled = false;
  $("#btn4").removeClass("disabled");
  $("#btn5").removeClass("disabled");
  $("#btn6").removeClass("disabled");
  document.getElementById("btn6").disabled = false;
  // let podcast1 = new Howl({
  //   src: ['assets/audios/podcast.mp3']
  // });
  // podcast1.play();
});

btn4.addEventListener("click", function () {
contador++;
visto(4);
status();
});
btn5.addEventListener("click", function () {
  contador++;
  visto(5);
  status();
});
btn6.addEventListener("click", function () {
  contador++;
  visto(6);
  status();
});
btn7.addEventListener("click", function () {
  visto(7);

});




function visto(valor) {
  set("cmi.core.lesson_location", valor);
  if (valor === 1) {
    let video1 = document.getElementById("video1");
    video1.remove();
  }
  if (valor === 3) {
    let audio1 = document.getElementById("audio1");
    audio1.remove();
  }
  if (valor === 7) {
    complete();
    end();
  }
}

function status() {
  if (contador === 3) {
    document.getElementById("btn7").disabled = false;
  }
}