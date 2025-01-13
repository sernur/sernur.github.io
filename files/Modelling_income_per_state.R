#install.packages("datasets")
#check the data by writing state.x77
Income = state.x77[,"Income"]
Pop = state.x77[,"Population"]
Area = state.x77[,"Area"]
Illit = state.x77[,"Illiteracy"]
Murder = state.x77[,"Murder"]
fit=lm(Income~Pop+Area+Illit+Murder)
summary(fit)
coefficients(fit) # this is betahat
RSS<-sum(residuals(fit)**2) #thiss SSR
sigmasquare<-RSS/(length(residuals(fit))-4) #S2 in a. That is estimate of sigmasquare

#b starts
r<-fit$residuals
plot(r,Area) #b # we plotted 
hist(residuals(fit)) #b #histogram of residuals
mean(r)
mean(residuals(fit))

#c
logArea=log(Area)
fitc=lm(Income~Pop+logArea+Illit+Murder) #this is refined model
summary(fitc)
RSSc<-sum(residuals(fitc)**2)
#means parameters in front of murder and logarea zero. i.e. betas are zero in fron of them.


#new model # 
fitc2=lm(Income~ Pop +Illit)
summary(fitc2)
RSSc2<-sum(residuals(fitc2)**2)
RSSc2
anova(fitc2)
fc<-(RSSc2-RSSc)/RSSc*(45/2)
fc_value=1-pf(fc,2,45)
fc_value


#d
Illit2=Illit^2
refit3<-lm(Income~ Pop +Illit+Illit2)
summary(refit3)
anova(refit3)
RSS4<-sum(residuals(refit3)**2)
RSS4
f_2<-((RSSc2-RSS4)/RSS4)*(46/1)
f_value_2=1-pf(f_2,1,46) # so reject the null hypothesis that means illet2 is significant. 
f_value_2

#e
Z<-Income-0.05*Pop+500*Illit
fit5<-lm(Z~1)
summary(fit5)
anova(fit5)
RSS5<-sum(residuals(fit5)**2)
RSS5
f_value_e<-(RSS5-RSSc2)/RSSc2*(47/2)
p_value_e<-1-pf(f_value_e,2,47)
print(p_value_e)
