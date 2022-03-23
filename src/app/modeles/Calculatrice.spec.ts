import {Calculatrice} from "./Calculatrice";

describe(                         //Décrit un ensemble de tests
  'Calculatrice',        //Le nom du groupe de tests
  () => {             //Tous les tests
    it(                             //Mon premier test
      'retourner le bon résultat de l\'addition',
      () => {
        let calc = new Calculatrice();
        let resultat = calc.addition(10, 20);
        expect(resultat).toEqual(30);
        expect(resultat).not.toEqual(40);
      });

    it(                             //Mon deuxieme test
      'retourner le bon résultat de la soustraction',
      () => {
        let calc = new Calculatrice();
        let resultat = calc.soustraction(20, 10);
        expect(resultat).toEqual(10);
        expect(resultat).not.toEqual(40);
      });

    it(                             //Mon troisième test
      'retourner le bon résultat de la multiplication',
      () => {
        let calc = new Calculatrice();
        let resultat = calc.multiplication(10, 4);
        expect(resultat).toEqual(40);
        expect(resultat).not.toEqual(14);
      });
    it(                             //Mon quatrième test
      'retourner le bon résultat de la division',
      () => {
        let calc = new Calculatrice();
        let resultat = calc.division(50, 10);
        expect(resultat).toEqual(5);
        expect(resultat).not.toEqual(40);
      });
  })
