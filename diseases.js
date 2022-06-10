let diseases = [
  {
    Disease: 'Allergies',
    Link: 'https://www.google.com/search?q=allergies&sxsrf=ALiCzsbTEGFJuFs7p0RJwE-OuUBvCjAPDw%3A1654783112379&ei=iPyhYtvhFtHv-QbQ1p7QCw&ved=0ahUKEwjbxd-8w6D4AhXRd94KHVCrB7oQ4dUDCA4&uact=5&oq=allergies&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyDQgAEIAEEIcCELEDEBQyBAgAEEMyBQgAEIAEMgoIABCABBCHAhAUMgUIABCABDILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BQgAEJECOggIABCABBCxAzoRCC4QgAQQsQMQgwEQxwEQrwE6CwguEIAEELEDEIMBOgcIABCxAxBDOgoILhDHARCjAhBDOgoIABCxAxCDARBDOgcILhDUAhBDOggILhCABBCxAzoICAAQsQMQgwE6CwguEIAEEMcBEK8BOgoILhDHARDRAxBDOggIABCxAxCRAjoHCAAQyQMQQ0oECEEYAEoECEYYAFAAWOzEAWCByQFoB3ABeACAAcgBiAHtC5IBBTguNS4xmAEAoAEBsAEKwAEB&sclient=gws-wiz',
    Symtomps: [
      'eye irritation',
      'runny nose',
      'stuffy nose',
      'puffy, watery eyes',
      'sneezing',
      'inflamed, itchy nose and throat',
    ],
  },
  {
    Disease: 'Cold and Flu',
    Link: 'https://www.google.com/search?q=cold+and+flu&sxsrf=ALiCzsZKzsJKS_3NpnTyU3gDTKdaqRIBNQ%3A1654784306435&source=hp&ei=MgGiYp33F5uB1e8P0P-08As&iflsig=AJiK0e8AAAAAYqIPQsN16Cj_K24QVZ_FFAfeyFqRd0Ro&ved=0ahUKEwid2Iz2x6D4AhWbQPUHHdA_Db4Q4dUDCAc&uact=5&oq=cold+and+flu&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6CgguEMcBEKMCECc6BAgAEEM6CAgAEIAEELEDOgoIABCABBCHAhAUOgcIABCxAxBDOgsIABCABBCxAxCDAToICC4QgAQQsQNQzypY4zxgvEFoAXAAeACAAYABiAGjCpIBAzMuOZgBAKABAbABCg&sclient=gws-wiz',
    Symtomps: [
      'fever',
      'headache',
      'more intense pain and fatigue',
      'more severe, often dry cough',
    ],
  },
  {
    Disease: 'Conjunctivitis (“pink eye“)',
    Link: 'https://www.google.com/search?q=Conjunctivitis+%28%E2%80%9Cpink+eye%E2%80%9C%29&sxsrf=ALiCzsZDBe22YPMfWMWlcjr8kPNx7nh89Q%3A1654784316668&ei=PAGiYo-gKPnu2roPkaeMkA4&ved=0ahUKEwiPrv_6x6D4AhV5t1YBHZETA-IQ4dUDCA4&uact=5&oq=Conjunctivitis+%28%E2%80%9Cpink+eye%E2%80%9C%29&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWOgcIIxDqAhAnSgQIQRgASgQIRhgAUABY0aoFYOCzBWgCcAF4AIABf4gBf5IBAzAuMZgBAKABAaABArABCsABAQ&sclient=gws-wiz',
    Symtomps: [
      'redness, itching, tearing, burning sensation',
      'pus-like discharge and/or crusting of the eyelids',
    ],
  },
  {
    Disease: 'Diarrhea',
    Link: 'https://www.google.com/search?q=Diarrhea&bih=663&biw=1366&hl=en&sxsrf=ALiCzsb5FOCR5TYb1zS0OmIvCXQn1Y_zyA%3A1654783650652&source=hp&ei=ov6hYv6LJu_L2roPxdWiiA4&iflsig=AJiK0e8AAAAAYqIMsnGLleL4aRjZ5aEUeXK0eOuBPSva&ved=0ahUKEwj-5LO9xaD4AhXvpVYBHcWqCOEQ4dUDCAc&uact=5&oq=Diarrhea&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEJECMgUIABCRAjIFCAAQkQIyDQgAEIAEEIcCELEDEBQyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQ6gIQJ1CzBFizBGDrCmgBcAB4AIABaYgBaZIBAzAuMZgBAKABAqABAbABCg&sclient=gws-wiz',
    Symtomps: [
      'watery, loose stools',
      'frequent bowel movements',
      'cramping or pain in the abdomen, nausea, bloating',
      'possibly fever or bloody stools, depending on the cause',
    ],
  },
  {
    Disease: 'Headaches',
    Link: 'https://www.google.com/search?q=Diarrhea&sxsrf=ALiCzsaUbvV8WCkLdemeLbPDbagFhWK3ww%3A1654784488546&ei=6AGiYseFIfql1e8PoMqNwAQ&ved=0ahUKEwjHmfrMyKD4AhX6UvUHHSBlA0gQ4dUDCA4&uact=5&oq=Diarrhea&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEJECMgQIABBDMggIABCxAxCRAjIHCAAQsQMQQzIFCAAQkQIyBAgAEEMyBAgAEEMyBQgAEIAEMggIABCABBCxA0oECEEYAEoECEYYAFAAWABg9QVoAHABeACAAYkBiAGJAZIBAzAuMZgBAKABAqABAcABAQ&sclient=gws-wiz',
    Symtomps: ['symptoms of a migraine', 'symptoms of a tension-type headache'],
  },
  {
    Disease: 'Mononucleosis',
    Link: 'https://www.google.com/search?q=mononucleosis&oq=Mononucleosis&aqs=chrome.0.35i39j0i20i263i512j0i512l8.818j0j9&sourceid=chrome&ie=UTF-8',
    Symtomps: [
      'nap frequently',
      'swollen lymph glands and spleen',
      'sore throat',
      'fever',
      'loss of appetite',
      'muscle aches',
    ],
  },
  {
    Disease: 'Heart Attack',
    Link: 'https://www.google.com/search?q=heart+attack&bih=663&biw=1366&hl=en&sxsrf=ALiCzsYf51oo57_wPhRTGx30UX1XrZ15Lg%3A1654785825573&ei=IQeiYsbCIpL2-QaQg5mgBw&ved=0ahUKEwiG17_KzaD4AhUSe94KHZBBBnQQ4dUDCA4&uact=5&oq=heart+attack&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyDQgAEIAEEIcCELEDEBQyBAgAEEMyCggAEIAEEIcCEBQyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CAgAELEDEIMBOg4ILhCxAxCDARDHARCjAjoKCC4QsQMQ1AIQQzoHCC4Q1AIQQzoHCAAQgAQQCkoECEEYAEoECEYYAFAAWP8LYLgOaABwAXgAgAHcAYgBuAuSAQU1LjUuMpgBAKABAcABAQ&sclient=gws-wiz',
    Symtomps: [
      'pain',
      'pressure',
      'shortness of breath',
      'lightheadedness',
      'nausea',
    ],
  },
  {
    Disease: 'Stroke',
    Link: 'https://www.google.com/search?q=Stroke&bih=663&biw=1366&hl=en&sxsrf=ALiCzsbB1_r1EeOyHoQxPJniE47dGUFTaQ%3A1654786747609&ei=uwqiYsXoJJSDoATZvZqwDA&ved=0ahUKEwiFspSC0aD4AhWUAYgKHdmeBsYQ4dUDCA4&uact=5&oq=Stroke&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBwgAELEDEEMyCggAELEDEIMBEEMyBAgAEEMyBwgAELEDEEMyBwgAELEDEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEENKBAhBGABKBAhGGABQAFgAYO0GaABwAXgAgAGdAogBnQKSAQMyLTGYAQCgAQKgAQHAAQE&sclient=gws-wiz',
    Symtomps: [
      'facial drooping',
      'arm weakness',
      'difficulty with speech',
      'rapidly developing dizziness',
      'loss of vision',
      'confusion',
    ],
  },
  {
    Disease: 'Breast Problems',
    Link: 'https://www.google.com/search?q=Breast+Problems&bih=663&biw=1366&hl=en&sxsrf=ALiCzsbCOLGuxXo55J5OCgYWb_9UfA8D8g%3A1654787042390&ei=4guiYouzF5Sx2roP_fGDkA4&ved=0ahUKEwiLrNyO0qD4AhWUmFYBHf34AOIQ4dUDCA4&uact=5&oq=Breast+Problems&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgoIABCABBCHAhAUMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgARKBAhBGABKBAhGGABQAFgAYMAHaABwAXgAgAGiAogBogKSAQMyLTGYAQCgAQKgAQHAAQE&sclient=gws-wiz',
    Symtomps: [
      'nipple discharge',
      'unusual breast tenderness',
      'nipple skin changes',
    ],
  },
  {
    Disease: 'Skin Problems',
    Link: 'https://www.google.com/search?q=Skin+Problems&bih=663&biw=1366&hl=en&sxsrf=ALiCzsZEMbhQQpf_6hUkk5Q6aLywFlUaBQ%3A1654787452206&ei=fA2iYriQDMXN2roPr8WqkA4&ved=0ahUKEwi4vpHS06D4AhXFplYBHa-iCuIQ4dUDCA4&uact=5&oq=Skin+Problems&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAELEDEJECMgUIABCRAjIECAAQQzIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIECAAQQzIFCAAQgAQyBQgAEIAESgQIQRgASgQIRhgAUABYAGDtBWgAcAF4AIABpwKIAacCkgEDMi0xmAEAoAECoAEBwAEB&sclient=gws-wiz',
    Symtomps: [
      'frequent flushing and redness of the face and neck',
      'jaundice',
      'new growths or moles',
    ],
  },
]
