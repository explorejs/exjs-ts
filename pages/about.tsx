
import {Button} from "../src/components/atoms/Button"

const theme = {
    fonts:{
        small:"2rem"
    }
}

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <Button/>
      <p>
        Fingerstache chicharrones brunch letterpress venmo tbh mlkshk literally
        helvetica tumeric. Hashtag dreamcatcher pop-up kale chips 3 wolf moon
        distillery mumblecore tattooed irony 90's wolf unicorn tumeric direct
        trade. Locavore vegan cornhole hashtag brooklyn subway tile actually
        next level tacos small batch. Shaman taiyaki fanny pack iPhone la croix
        neutra, ramps 90's locavore VHS sriracha gentrify flexitarian. Tumeric
        mixtape cold-pressed poke godard fam etsy occupy try-hard shaman
        vaporware tote bag fanny pack 8-bit. Tbh selvage godard adaptogen
        jianbing tousled.
      </p>
      <p>
        Fingerstache chicharrones brunch letterpress venmo tbh mlkshk literally
        helvetica tumeric. Hashtag dreamcatcher pop-up kale chips 3 wolf moon
        distillery mumblecore tattooed irony 90's wolf unicorn tumeric direct
        trade. Locavore vegan cornhole hashtag brooklyn subway tile actually
        next level tacos small batch. Shaman taiyaki fanny pack iPhone la croix
        neutra, ramps 90's locavore VHS sriracha gentrify flexitarian. Tumeric
        mixtape cold-pressed poke godard fam etsy occupy try-hard shaman
        vaporware tote bag fanny pack 8-bit. Tbh selvage godard adaptogen
        jianbing tousled.
      </p>
      <p>
        Fingerstache chicharrones brunch letterpress venmo tbh mlkshk literally
        helvetica tumeric. Hashtag dreamcatcher pop-up kale chips 3 wolf moon
        distillery mumblecore tattooed irony 90's wolf unicorn tumeric direct
        trade. Locavore vegan cornhole hashtag brooklyn subway tile actually
        next level tacos small batch. Shaman taiyaki fanny pack iPhone la croix
        neutra, ramps 90's locavore VHS sriracha gentrify flexitarian. Tumeric
        mixtape cold-pressed poke godard fam etsy occupy try-hard shaman
        vaporware tote bag fanny pack 8-bit. Tbh selvage godard adaptogen
        jianbing tousled.
      </p>
      <style jsx>
        {`
          p {
            color: green;
            font-size:${theme.fonts.small};
          }
        `}
      </style>
    </div>
  );
};

export default About;
