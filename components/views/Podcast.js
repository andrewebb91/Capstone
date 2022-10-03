import html from "html-literal";
import podcast from "../../assets/IMG_2099.jpg";
export default (state) => html`
  <section>
    <div>
      <img class="PodcastImage" src="${podcast}" alt="Perspective Podcast" />
    </div>
    <div class="trailer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NPqYDzHCOgA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div></div>
    <p>
      A fun, innovative way of looking at today’s societal norms through
      generational lenses. A tongue in cheek, no holds bar discussion between
      various viewpoints that may agree or disagree, but often realize the
      answer is somewhere in between.
    </p>
    <div class="t2">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0DsmdjaoyHg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <p>
      #theperspectivepodcast#theperspectivepodcast #podcast #whatdoyouthink
      #watchuswork #youngprofessionals #everydaytalk #blackinmedia #dailygrind
      #HBCU #UMES #XULA #FAMU #HOWARD #JSU #podcastersofinstagram #podcastlife
      #blackpodcast #blkpodcastmatters #listen #supportuswesupportyou
      #dopepodcast #marrythathoe #boogersandbooties
    </p>
  </section>
`;
