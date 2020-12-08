// language config
console.log("i18n")
// function translate 
translate = function (className, value) {
    for (i = 0; i < document.getElementsByClassName(className).length; i++) {
        document.getElementsByClassName(className)[i].innerHTML = value;
        console.log(document.getElementsByClassName(className)[i])
    }
}
var i18n = {};
// French lang
i18n.fr = {};
i18n.fr.lang_current_active = "Français";
i18n.fr.lang_home = "Accueil";
i18n.fr.lang_new = "NOUVEAU";
i18n.fr.lang_blog = "Blog";
i18n.fr.lang_faq = "FAQ";
i18n.fr.lang_contact = "Contact";
i18n.fr.lang_login = "Log In";
i18n.fr.lang_title = "Aggrégateur de données voyages";
i18n.fr.lang_description = "<p>L'IA appliquée au voyage d'affaire</p>";
i18n.fr.lang_voyagez_diff = "Voyagez différement";
i18n.fr.lang_voyagez_diff_desc = "Offrez un plus large choix à vos voyageurs tout en sécurisant les déplacements.";
i18n.fr.lang_voyageur = "Voyageur";
i18n.fr.lang_voyageur_desc = "Choisissez votre site préféré pour réserver. Nous récupérons automatiquement les données de réservations";
i18n.fr.lang_manager = "Manager";
i18n.fr.lang_manager_desc = "Visualisez toutes les dépenses et budget de vos équipes en temps réel.";
i18n.fr.lang_service_financer = "Service financer";
i18n.fr.lang_service_financer_desc = "1 reporting complet pour savoir où et comment les budgets sont consommés";
i18n.fr.lang_service_voyages = "Service Voyages";
i18n.fr.lang_service_voyages_desc = "1 vision globale de l'ensemble des réservations de l'organisation (compagnies, hôtels, prix, heures, dates)";
i18n.fr.lang_allinone = "All in one place";
i18n.fr.lang_allinone_desc = "Toutes vos données voyages regroupées en un seul endroit. Vous gagnez du temps dans la consolidation et dans l'analyse.";
i18n.fr.lang_request_demo = "request demo";
i18n.fr.lang_features = "Features";
i18n.fr.lang_features_description = "Des solutions innovantes pour sensibiliser vos équipes et pour visualiser les dépenses";
i18n.fr.lang_gamification = "Gamification";
i18n.fr.lang_gamification_description = "Challengez vos équipes et récompensez les voyageurs.";
i18n.fr.lang_analytics = "Analytics";
i18n.fr.lang_analytics_description = "Visualisez les dépenses, budgets des équipes et de l'organisation";
i18n.fr.lang_dutycare = "Duty of Care";
i18n.fr.lang_dutycare_description = "Nous intégrons votre assistant de sécurité voyages afin de garantir la protection des voyageurs";
i18n.fr.lang_voyage_affaire = "le voyage d'affaires de demain";
i18n.fr.lang_voyage_affaire_description = "Le monde change et le voyayeur d'affaires aussi. Nous développons des solutions pour faciliter vos réservations et pour vous permettre de gagner en productivité";
i18n.fr.lang_moins_frontiere_pre = "moins de";
i18n.fr.lang_moins_frontiere = "frontières";
i18n.fr.lang_frontiere_description = "Des comportements similaires lors des réservations corporates et personnelles.";
i18n.fr.lang_learn_more = "Learn more ";
i18n.fr.lang_experience_utilisateur_pre = "Expérience";
i18n.fr.lang_experience_utilisateur = "Utilisateur";
i18n.fr.lang_experience_utilisateur_description = "De nombreux sites BtoC se différencient par des expériences utilisateurs différentes.";
i18n.fr.lang_marche_fragmente_pre = "Marché";
i18n.fr.lang_marche_fragmente = "Fragmenté";
i18n.fr.lang_marche_fragmente_description = "Un nombre important de nouvelles compagnies, comparateurs et aggégateurs.";
i18n.fr.lang_plus_info = "Plus d'informations ?";
i18n.fr.lang_faq = "FAQ";
i18n.fr.lang_question1 = "Un voyageur peut-il réserver sur n'importe quel site?";
i18n.fr.lang_answer1 = "Oui, notre technologie nous permet de récupérer les réservations de tous les sites hôtelliers et aériens y compris comparateurs, Airbnb et Uber";
i18n.fr.lang_question2 = "La solution est-elle déployable à l'échelle globale ?";
i18n.fr.lang_answer2 = "Oui, étant donné que le voyageur peut réserver sur le site de son choix, la solution est déployable sur l'ensemble des pays.";
i18n.fr.lang_question3 = "La récupération des informations est-elle automatique ?";
i18n.fr.lang_answer3 = "Oui, notre objectif est de faciliter la vie des voyageurs d'affaires. L'ensemble des réservations sont récupérées et segmenter en fonction du nom et du mail du voyageur";
i18n.fr.lang_copyright = "Copyright";
i18n.fr.lang_privacy_policy = "Privacy Policy";


// English lang
i18n.en = {}
i18n.en.lang_current_active = "English";
i18n.en.lang_home = "Home";
i18n.en.lang_blog = "Blog";
i18n.en.lang_new = "New";
i18n.en.lang_contact = "Contact";
i18n.en.lang_login = "Log In";
i18n.en.lang_title = "Travel Data Aggregator";
i18n.en.lang_description = "<p>Business travel meets Artificial Intelligence</p>";
i18n.en.lang_voyagez_diff = "Tailored experience";
i18n.en.lang_voyagez_diff_desc = "Get access to the larger choice";
i18n.en.lang_voyageur = "Traveler";
i18n.en.lang_voyageur_desc = " Book on your favourite website.We automatically retrieve your travel information";
i18n.en.lang_manager = "Manager";
i18n.en.lang_manager_desc = "Visualize team spending.";
i18n.en.lang_service_financer = "Financial department";
i18n.en.lang_service_financer_desc = "Get a global understading of spending and overruns";
i18n.en.lang_service_voyages = "Travel department";
i18n.en.lang_service_voyages_desc = "Pilote efficiently your travel program, get 100% of travel data";
i18n.en.lang_allinone = "All in one place";
i18n.en.lang_allinone_desc = "All your travel data in one place. Deliver better and faster analysis.";
i18n.en.lang_request_demo = "Request a demo";
i18n.en.lang_features = "Features";
i18n.en.lang_features_description = "Innovative solution to include your team";
i18n.en.lang_gamification = "Gamification";
i18n.en.lang_gamification_description = "Challenge and reward travelers, teams and managers.";
i18n.en.lang_analytics = "Analytics";
i18n.en.lang_analytics_description = "A global understanding of every spending";
i18n.en.lang_dutycare = "Duty of Care";
i18n.en.lang_dutycare_description = "Integration with travel risk management companies to be sure traveler are safe";
i18n.en.lang_voyage_affaire = "Business travel tomorrow";
i18n.en.lang_voyage_affaire_description = "There are more and more digital native . We are developing solutions to prepare you for the upcoming shift";
i18n.en.lang_moins_frontiere_pre = "Less";
i18n.en.lang_moins_frontiere = "barriers";
i18n.en.lang_frontiere_description = "Similar behavior for leisure and business travel";
i18n.en.lang_learn_more = "Learn more ";
i18n.en.lang_experience_utilisateur_pre = "User";
i18n.en.lang_experience_utilisateur = "Experience";
i18n.en.lang_experience_utilisateur_description = "BtoC websites (airlines, hotels, comparators) deliver a unique experience to traveler.";
i18n.en.lang_marche_fragmente_pre = "Splitted";
i18n.en.lang_marche_fragmente = "Market";
i18n.en.lang_marche_fragmente_description = "More and more suppliers and comparators";
i18n.en.lang_plus_info = "More information ?";
i18n.en.lang_faq = "FAQ";
i18n.en.lang_privacy_policy = "Privacy Policy";
// Default language 
let lang = localStorage.getItem('lang_default');
lang == 'fr' ? i18n.current = i18n.fr : i18n.current = i18n.en;

var switch_lang = function (val) {
    localStorage.setItem('lang_default', val)
    location.reload();
}
// translate all
translateAll = function () {
    if (i18n.current.lang_current_active != undefined) translate("lang_current_active", i18n.current.lang_current_active);
    if (i18n.current.lang_home != undefined) translate("lang_home", i18n.current.lang_home);
    if (i18n.current.lang_new != undefined) translate("lang_new", i18n.current.lang_new);
    if (i18n.current.lang_blog != undefined) translate("lang_blog", i18n.current.lang_blog);
    if (i18n.current.lang_contact != undefined) translate("lang_contact", i18n.current.lang_contact);
    if (i18n.current.lang_login != undefined) translate("lang_login", i18n.current.lang_login);
    if (i18n.current.lang_title != undefined) translate("lang_title", i18n.current.lang_title);
    if (i18n.current.lang_description != undefined) translate("lang_description", i18n.current.lang_description);
    if (i18n.current.lang_voyagez_diff != undefined) translate("lang_voyagez_diff", i18n.current.lang_voyagez_diff);
    if (i18n.current.lang_voyagez_diff_desc != undefined) translate("lang_voyagez_diff_desc", i18n.current.lang_voyagez_diff_desc);
    if (i18n.current.lang_voyageur != undefined) translate("lang_voyageur", i18n.current.lang_voyageur);
    if (i18n.current.lang_voyageur_desc != undefined) translate("lang_voyageur_desc", i18n.current.lang_voyageur_desc);
    if (i18n.current.lang_manager != undefined) translate("lang_manager", i18n.current.lang_manager);
    if (i18n.current.lang_manager_desc != undefined) translate("lang_manager_desc", i18n.current.lang_manager_desc);
    if (i18n.current.lang_service_financer != undefined) translate("lang_service_financer", i18n.current.lang_service_financer);
    if (i18n.current.lang_service_financer_desc != undefined) translate("lang_service_financer_desc", i18n.current.lang_service_financer_desc);
    if (i18n.current.lang_service_voyages != undefined) translate("lang_service_voyages", i18n.current.lang_service_voyages);
    if (i18n.current.lang_service_voyages_desc != undefined) translate("lang_service_voyages_desc", i18n.current.lang_service_voyages_desc);
    if (i18n.current.lang_allinone != undefined) translate("lang_allinone", i18n.current.lang_allinone);
    if (i18n.current.lang_allinone_desc != undefined) translate("lang_allinone_desc", i18n.current.lang_allinone_desc);
    if (i18n.current.lang_request_demo != undefined) translate("lang_request_demo", i18n.current.lang_request_demo);
    if (i18n.current.lang_features != undefined) translate("lang_features", i18n.current.lang_features);
    if (i18n.current.lang_features_description != undefined) translate("lang_features_description", i18n.current.lang_features_description);
    if (i18n.current.lang_gamification != undefined) translate("lang_gamification", i18n.current.lang_gamification);
    if (i18n.current.lang_gamification_description != undefined) translate("lang_gamification_description", i18n.current.lang_gamification_description);
    if (i18n.current.lang_analytics != undefined) translate("lang_analytics", i18n.current.lang_analytics);
    if (i18n.current.lang_analytics_description != undefined) translate("lang_analytics_description", i18n.current.lang_analytics_description);
    if (i18n.current.lang_dutycare != undefined) translate("lang_dutycare", i18n.current.lang_dutycare);
    if (i18n.current.lang_dutycare_description != undefined) translate("lang_dutycare_description", i18n.current.lang_dutycare_description);
    if (i18n.current.lang_voyage_affaire != undefined) translate("lang_voyage_affaire", i18n.current.lang_voyage_affaire);
    if (i18n.current.lang_voyage_affaire_description != undefined) translate("lang_voyage_affaire_description", i18n.current.lang_voyage_affaire_description);
    if (i18n.current.lang_moins_frontiere_pre != undefined) translate("lang_moins_frontiere_pre", i18n.current.lang_moins_frontiere_pre);
    if (i18n.current.lang_moins_frontiere != undefined) translate("lang_moins_frontiere", i18n.current.lang_moins_frontiere);
    if (i18n.current.lang_frontiere_description != undefined) translate("lang_frontiere_description", i18n.current.lang_frontiere_description);
    if (i18n.current.lang_learn_more != undefined) translate("lang_learn_more", i18n.current.lang_learn_more);
    if (i18n.current.lang_experience_utilisateur_pre != undefined) translate("lang_experience_utilisateur_pre", i18n.current.lang_experience_utilisateur_pre);
    if (i18n.current.lang_experience_utilisateur != undefined) translate("lang_experience_utilisateur", i18n.current.lang_experience_utilisateur);
    if (i18n.current.lang_experience_utilisateur_description != undefined) translate("lang_experience_utilisateur_description", i18n.current.lang_experience_utilisateur_description);
    if (i18n.current.lang_marche_fragmente_pre != undefined) translate("lang_marche_fragmente_pre", i18n.current.lang_marche_fragmente_pre);
    if (i18n.current.lang_marche_fragmente != undefined) translate("lang_marche_fragmente", i18n.current.lang_marche_fragmente);
    if (i18n.current.lang_marche_fragmente_description != undefined) translate("lang_marche_fragmente_description", i18n.current.lang_marche_fragmente_description);
    if (i18n.current.lang_plus_info != undefined) translate("lang_plus_info", i18n.current.lang_plus_info);
    if (i18n.current.lang_faq != undefined) translate("lang_faq", i18n.current.lang_faq);
    if (i18n.current.lang_question != undefined) translate("lang_question1", i18n.current.lang_question);
    if (i18n.current.lang_answer != undefined) translate("lang_answer1", i18n.current.lang_answer);
    if (i18n.current.lang_question != undefined) translate("lang_question2", i18n.current.lang_question);
    if (i18n.current.lang_answer != undefined) translate("lang_answer2", i18n.current.lang_answer);
    if (i18n.current.lang_question != undefined) translate("lang_question3", i18n.current.lang_question);
    if (i18n.current.lang_answer != undefined) translate("lang_answer3", i18n.current.lang_answer);
    if (i18n.current.lang_copyright != undefined) translate("lang_copyright", i18n.current.lang_copyright);
    if (i18n.current.lang_privacy_policy != undefined) translate("lang_privacy_policy", i18n.current.lang_privacy_policy);
}