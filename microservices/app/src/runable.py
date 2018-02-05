
from flask import jsonify
from flask import Flask, render_template, request
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 \
    import Features, EntitiesOptions, KeywordsOptions, RelationsOptions, SemanticRolesOptions, ConceptsOptions, \
    CategoriesOptions

app = Flask(__name__)


natural_language_understanding = NaturalLanguageUnderstandingV1(
  username='0f52f949-9645-408a-bbae-80d6f4512750',
  password='TWUmeCwXnT1J',
  version='2017-02-27')
'''
@app.route('/')
def home():
 return render_template('input.html')
'''

#@app.route('/result', methods=['POST'])
@app.route('/', methods=['GET','POST'])
def resultjson():

    if request.method == 'POST':
        #text1 = request.form
        text1 = request.get_json(force=True)
        user = natural_language_understanding.analyze(
        text=str(text1),
        features=Features(
            entities=EntitiesOptions(
                emotion=True,
                sentiment=True,
                limit=2),
            relations=RelationsOptions(),
            categories=CategoriesOptions(),
            semantic_roles=SemanticRolesOptions(),
            concepts=ConceptsOptions(
                limit=3),
            keywords=KeywordsOptions(
                emotion=True,
                sentiment=True,
                limit=2)))
        return jsonify(user)
        #return render_template("result.html", result=user)







if __name__ == '__main__':
 app.run(debug=True)
