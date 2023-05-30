package com.example.finalproject.controller;

import com.example.finalproject.model.ClassMeta;
import com.example.finalproject.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.Map;

@Controller
@RequestMapping("/admin")
public class ClassController {
    @Autowired
    private ClassService csrv;
    @GetMapping("/classlist")
    public ModelAndView list(Integer cpg) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("admin/classlist");
        if (cpg == null || cpg == 0) cpg = 1;

        Map<String, Object> tcls = csrv.listclass(cpg);

        mv.addObject("cl", tcls.get("cl"));
        mv.addObject("cpg", cpg);
        mv.addObject("stpg", ((cpg - 1) / 10) * 10 + 1);
        mv.addObject("cntpg", tcls.get("cntpg"));
        return mv;
    }
    @GetMapping("/addclass")
    public String add(Model m) {
        m.addAttribute("tclass",new ClassMeta());

        return "admin/addclass";
    }
    @PostMapping("/addclass")
    public String addok(@Valid ClassMeta classMeta, BindingResult br) {
        String view = "redirect:/admin/classlist?cpg=1";

        if (br.hasErrors()) { // 유효성 검사시 오류가 발생하면
            view = "admin/addclass";
        }
        else {csrv.newClass(classMeta);}

        return view;
    }
    @GetMapping("/countclass")
    public ModelAndView count(Integer cpg) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("admin/countclass");
        if (cpg == null || cpg == 0) cpg = 1;

        Map<String, Object> tcls = csrv.listclass(cpg);

        mv.addObject("cl", tcls.get("cl"));
        mv.addObject("cpg", cpg);
        mv.addObject("stpg", ((cpg - 1) / 10) * 10 + 1);
        mv.addObject("cntpg", tcls.get("cntpg"));
        return mv;
    }
}
