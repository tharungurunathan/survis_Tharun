define({
	authorizedTags: {
		"type:ner": {
			"description": "Paper on Named Entity Recognition"
		},
		"type:uncertainty": {
			"description": "Paper on uncertainty quantification in deep learning"
		},
		"type:survey": {
			"description": "Survey or literature review paper"
		},
		"category:a-foundations": {
			"description": "Category A — Deep Learning NER Foundations (Papers 1-3, 2016-2018)"
		},
		"category:b-transformer": {
			"description": "Category B — Transformer-based and Span-aware NER (Papers 4-6, 2019-2022)"
		},
		"category:c-uncertainty": {
			"description": "Category C — Uncertainty Quantification (Papers 7-10, 2016-2020)"
		},
		"method:bilstm-crf": {
			"description": "Bidirectional LSTM with CRF decoder for sequence labelling"
		},
		"method:bilstm-cnn": {
			"description": "Bidirectional LSTM with CNN character-level encoder"
		},
		"method:elmo": {
			"description": "Deep contextualised word representations from biLSTM language model"
		},
		"method:bert": {
			"description": "Deep bidirectional transformer pre-trained with masked language modelling"
		},
		"method:biaffine-span": {
			"description": "Biaffine scoring mechanism over all token pairs for span prediction"
		},
		"method:mc-dropout": {
			"description": "Monte Carlo Dropout — test-time stochastic forward passes for uncertainty"
		},
		"method:deep-ensembles": {
			"description": "Ensemble of M networks trained from different initialisations"
		},
		"method:uanet": {
			"description": "Uncertainty-Aware label refinement via variational LSTM and self-attention"
		},
		"other:sequence-labelling": {
			"description": "Uses BIO/BIOES sequence tagging scheme"
		},
		"other:span-prediction": {
			"description": "Predicts entity spans rather than token-level labels"
		},
		"other:nested-entities": {
			"description": "Handles nested or overlapping entity mentions"
		},
		"other:contextual-embeddings": {
			"description": "Uses context-dependent word representations"
		},
		"other:pre-training": {
			"description": "Uses large-scale unsupervised pre-training"
		},
		"other:fine-tuning": {
			"description": "Fine-tunes a pre-trained model on downstream NER data"
		},
		"other:aleatoric": {
			"description": "Models irreducible data noise (aleatoric uncertainty)"
		},
		"other:epistemic": {
			"description": "Models reducible model ignorance (epistemic uncertainty)"
		},
		"other:calibration": {
			"description": "Evaluates or improves confidence calibration"
		},
		"other:bayesian": {
			"description": "Uses Bayesian inference or approximate Bayesian methods"
		},
		"other:label-refinement": {
			"description": "Iteratively refines predicted labels using uncertainty signals"
		},
		"other:taxonomy": {
			"description": "Proposes a classification framework or taxonomy of methods"
		},
		"other:character-embeddings": {
			"description": "Uses character-level features for morphological encoding"
		},
		"other:deep-learning": {
			"description": "General deep learning methods"
		}
	}
});