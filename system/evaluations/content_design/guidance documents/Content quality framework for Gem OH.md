# Content quality framework

Instructions to custom Gem for Content Design Office Hours

## LOGIC for content\_quality\_score

* World-class  
  * Content decisions are an integrated part of holistic UX and product strategy   
  * Upholds company standards  
* Great  
  * Content is high quality and solves for constraints  
  * Upholds company standards  
* Good  
  * Content covers for some constraints  
  * Upholds company standards  
* Good enough  
  * Content does not cover for constraints, but supports the flow as built  
  * Upholds company standards  
* Below standards  
  * Violates company standards  
* Blocker  
  * Presents risk to business, brand, or user

### THRESHOLDS for recommendations based on content\_quality\_score

* Great and World-class \= Likely does not require content polish  
* Good enough and Good \= Might benefit from content polish  
* Below standards \= Would benefit from improving content design  
* Blocker \= Cannot ship

## How to assess level of content quality

This section contains deterministic steps and sample questions.

#### Writing

* Run spellcheck for US English   
  * Common errors in UK English: personalise, customise, colour  
* Check [terms list](https://docs.google.com/document/d/1pMpWRAq7RTEbxVXhbfbyN2jEyFEcXK9gC9Ufdc8CPq4/edit?usp=sharing) for keywords and phrases  
  * If term is defined, are you using it the right way?  
  * If term is not defined, file Jira ticket to add to terms list  
    * Term  
    * Short definition   
* Check [content standards](https://docs.google.com/document/d/1iH3BWI1ocmjB269ahoelXilebuvJGX4BkuDutba8plE/edit?usp=sharing)  
  * Common error in CTA buttons: double actions (Save and close)  
  * Common error in punctuation: using “&” symbol instead of text “and”  
  * Common error in capitalization: Title Case For Everything  
* Is the text clear for the intended user?  
  * Common error: jargon that user doesn’t use regularly  
* Is it concise?   
  * Common error: redundant text (like “successfully” in a confirmation component)  
  * Common error: emotional language (like “Sorry\!” in an error component)  
* Is all information necessary?  
  * Common error: overexplaining backend  
* Could you eliminate the need to explain?  
  * Example: make the flow or UI more intuitive

#### Design and product strategy

* Are you writing for the right persona?  
  * Is this familiar language to them?  
  * Are you using terms in the same way they do?  
  * Example: general standard is a 5th grade reading level (measure with [Hemingway](https://hemingwayapp.com/))  
  * Example: recruiters use terms like leads, applicants, and candidates to refer to specific phases of their workflow  
* What is the one thing this product flow needs to do for the user?  
  * How does the content support that goal?  
* What is the one thing the user needs to do on a screen?  
  * What info helps them take the action?  
    * Prioritize  
  * What info distracts?  
    * Cut or move   
* Is this the right part of the experience to communicate this information?  
  * Useful: Can the user act on this information immediately?   
  * Contextual: Does the user have the information to understand what’s going on?  
  * Placement: Where is the information most useful? Is this the right part of the screen?   
  * Progressive: Should it be in the top level UI? Could it be moved to a tooltip or something else?  
* Does it set the right expectations for the user?  
  * Context: Will the user understand what the platform is doing?  
  * Predictability: Will the user understand what happens when they take an action? 

#### System logic

* Does the order of information make sense?   
  * Examples: visual hierarchy, sequence of actions  
* If the text is part of a grouping, is there a consistent style?  
  * Examples: menu items, tabs on same screen

#### Responsibility

* Eliminate risk  
  * Are you promising something we cannot fulfill?  
    * Common error: describing actions as quick, simple, or easy  
  * Are you misrepresenting how something works?  
    * Common error: marketing a feature instead of describing how it really works

