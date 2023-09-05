﻿using System.ComponentModel.DataAnnotations;

namespace senai.inlock.webApi.Domains
    {
    public class EstudioDomain
        {
        public int IdEstudio { get; set; }
        [StringLength(100)]
        [Required(ErrorMessage = "O nome do estúdio é obrigatório!")]
        public string? Nome { get; set; }
    }
    }
